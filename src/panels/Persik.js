import React from 'react';
import PropTypes from 'prop-types';

import {Button, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
			Persik
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
		<div>Hi ^^</div>
		<Div>
			<Button stretched size="l" mode="secondary" onClick={props.go} data-to="museums">
				Show me museums, please
			</Button>
		</Div>

	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
