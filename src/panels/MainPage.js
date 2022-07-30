import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser, time }) => (
	<Panel id={id}>
		{fetchedUser &&
			<Group>
				<Panel>{time}, {`${fetchedUser.first_name}`}</Panel>
			</Group>}



		<Group header={<Header mode="secondary">Добрый день</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="home">
					Главная
				</Button>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="home">
					Вызовы
				</Button>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="home">
					Рейтинг
				</Button>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="home">
					Магазин
				</Button>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="home">
					Аккаунт
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	time: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
