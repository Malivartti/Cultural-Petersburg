import React, { useContext, useState } from 'react'
import { View, Panel, PanelHeader, Avatar, Title, Group, HorizontalCell, Div, HorizontalScroll, Cell, Switch } from '@vkontakte/vkui'
import './index.css';
import Coins from '../../Components/Coins/Coins';
import { AppNavigation, User } from '../../context';
import Statistics from '../../Components/Statistics/Statistics';
import ICONS from '../../img/icons';

const Account = ({ id }) => {
  const { first_name, last_name, photo_100 } = useContext(User)
  const {setActiveView} = useContext(AppNavigation)
  const [value, setValue] = useState(false)

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false}>Аккаунт</PanelHeader>
        <div className='account__content'>
          <HorizontalCell
            className='account__user'
            header={
              <div className="account__text">
                <Title level='2' className="account__name">{first_name} {last_name}</Title>
                <Coins value={100} />
              </div>
            }>
            <Avatar size={120} src={photo_100} />
          </HorizontalCell>
        </div>
        <Statistics />
        <Cell before={<ICONS.notification />} after={<Switch checked={value} />} onClick={() => setValue(prev => !prev)}>
          Уведомления
        </Cell>
        <Cell before={<ICONS.users />} after={<ICONS.chevronRight />}>
          Наше сообщесво
        </Cell>
        <Cell before={<ICONS.message />} after={<ICONS.chevronRight />}>
          Беседа
        </Cell>
        <Cell before={<ICONS.cards />} after={<ICONS.chevronRight />} onClick={() => setActiveView('moderation')}>
          Модерация
        </Cell>
      </Panel>
    </View>
  )
}

export default Account