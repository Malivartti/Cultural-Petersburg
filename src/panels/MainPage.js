import React from 'react';
import PropTypes from 'prop-types';

import {Button, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';

const MainPage = props => (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
			MainPage
		</PanelHeader>

		<Div>
			<Button stretched size="l" mode="secondary" onClick={props.go} data-to="museums">
				Show me museums, please
			</Button>
		</Div>

	</Panel>
);

MainPage.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default MainPage;
