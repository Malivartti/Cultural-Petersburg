import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

import {Button, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';


const requestURL = 'https://spb-classif.gate.petersburg.ru/api/v2/datasets/145/versions/latest/data/166/'

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        var XMLHttpRequest = require('xhr2');
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2a2lkMDAwMDAwMDAwIiwiZXhwIjoxNjczMDk4NDk3fQ.jU1raLl7kvOfOyksa26Triuq1dCusw4c7j3TuErJS1s");

        xhr.responseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send()
    })
}

let names = []

sendRequest('GET', requestURL)
    .then(data => {
        let key;
        for (key in data['results']) {
            console.log(data['results'][key]['name'])
            names.push(data['results'][key]['name'])
        }

    })
    .catch(err => console.log(err))

console.log("LOG:", names)



const Museums = props => (
    <Panel id={props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
            MUSEUMS
        </PanelHeader>

        <div>
            <ul>{names.map(name => <li key={name}> {name} </li> )}</ul>
        </div>

    </Panel>
);

Museums.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Museums;