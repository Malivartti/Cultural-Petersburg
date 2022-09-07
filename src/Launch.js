import React, { useState, useEffect } from 'react';
import { AdaptivityProvider, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

import App from './App'
import { User } from './context';
import { initApp } from './api/backend';

const Launch = () => {
  const [scheme, setScheme] = useState('vkcom_light')
  const [fetchedUser, setUser] = useState(null);
  const [launchParams, setLaunchParams] = useState(null);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === 'VKWebAppUpdateConfig') {
        setScheme(data.scheme)
      }
      if (type === "VKWebAppGetLaunchParamsResult") {
        setLaunchParams(data)
        initApp({...data, "vk_access_token_settings": "menu"})
      }
    });

    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
    }
    fetchData();
  }, []);

  return (
    <User.Provider value={{fetchedUser, launchParams}}>
      <ConfigProvider scheme={scheme}>
        <AdaptivityProvider>
          <AppRoot>
            <App/>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider >
    </User.Provider>
  )
}

export default Launch