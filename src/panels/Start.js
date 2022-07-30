import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import icon from '../img/icon.png';
import saly from '../img/saly.png';

const Start = ({ id, run }) => (
    <Panel id={id}>
        <Group>
            <Panel><img className="Persik" src={icon} alt="Persik The Cat"/>Мой Петербург</Panel>
            <Panel>Привет, твой Петербург на связи 😃</Panel>
            <Panel>Это приложение создано для изучения города, открытия новых для себя мест и мониторинга событий</Panel>
            <img className="Persik" src={saly} alt="Persik The Cat"/>
            <Button stretched size="l" mode="secondary" onClick={run} data-to="main_page">
                Начать
            </Button>
        </Group>


    </Panel>
);

Start.propTypes = {
    id: PropTypes.string.isRequired,
    run: PropTypes.func.isRequired,
};

export default Start;