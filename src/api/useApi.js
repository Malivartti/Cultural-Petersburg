import { useCallback, useRef, useEffect, useState } from "react";
import { useNavigation } from "./useNavigation";

class ValidationError extends Error {
    constructor(message, resp) {
      super(message, resp);
      this.name = "ValidationError";
      this.resp = resp;
    }
}
class InvalidJson extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidJson";
      }
}
export const useApi = () => {
    const { goDisconnect, setAbortSnack } = useNavigation();
    const mountedRef = useRef(false);
    const [textError, setTextError] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        mountedRef.current = true
        return () => {
            mountedRef.current = false
        }
    }, [])

    useEffect(() => {
        if(!textError) return;
        setAbortSnack(textError);
        setTextError(null);

    }, [setAbortSnack, textError])

    useEffect(() => {
        if(!error) return;
        goDisconnect(error);
        setError(null);

    }, [goDisconnect, error])

    const fetchApi = useCallback(async (method, data, http_method='post') => {
        let get_params = window.location.search.replace('?', '');
        try {
            let res = await fetch(method + (get_params ? '?' + get_params : ''),
            {
                method: http_method,
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: !(["get", "head"].includes(http_method)) ? JSON.stringify(data) : null,
            })
            let res_clone = res.clone();
            try {
                res = await res.json();
                if(!res.result) {
                    setTextError('Произошла ошибка: ' + res.error.message);
                    // if(res.error.code === 3) 
                    throw new ValidationError(res.error.messag, res);
                }
                return res.response;
            } catch(err) {
                throw new InvalidJson(await res_clone.text())
            }
            
        } catch(e) {
            let err = e;
            if(err instanceof ValidationError) throw err;
            setError(err);
            return null;
        }
        
    }, [])

    const fetchApiFormData = useCallback(async (method, data, http_method='post') => {
        let get_params = window.location.search.replace('?', '');
        try {
            let form_data = new FormData();
            for (const key in data) {
                form_data.append(key, data[key]);
            }
            let res = await fetch(method + (get_params ? '?' + get_params : ''),
            {
                method: http_method,
                body: !(["get", "head"].includes(http_method)) ? form_data : null,
            })
            res = await res.json();
            if(!res.result) {
                throw new TypeError(res.error.message);
            }
            return res.response;
        } catch(e) {
            if(e instanceof TypeError) throw e;
            setError(e);
            return null;
        }
        
    }, [])
    return {
        mountedRef,
        fetchApi,
        fetchApiFormData,
    }
}