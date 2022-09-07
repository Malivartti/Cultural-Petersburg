import React, { useContext, useState } from 'react'
import { View, Panel, PanelHeader, Avatar, Title, HorizontalCell, Cell, Switch, Link, Group } from '@vkontakte/vkui'
import bridge from "@vkontakte/vk-bridge";
import './index.css';

import Coins from '../../Components/Coins/Coins';
import { AppNavigation, User } from '../../context';
import Statistics from '../../Components/Statistics/Statistics';
import ICONS from '../../img/icons';

const Account = ({ id }) => {
  const { fetchedUser: { first_name, last_name, photo_100 } } = useContext(User)
  const { setActiveStory } = useContext(AppNavigation)
  const [value, setValue] = useState(false)

  function notifications() {
    // if (value) {
    //   bridge.send("VKWebAppDenyNotifications")
    // } else {
    //   bridge.send("VKWebAppAllowNotifications")
    // }
    setValue(prev => !prev)
  }

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false}>Аккаунт</PanelHeader>
        <Group>
          <div className='account__user'>
            <div className='account__avatar'>
              <Avatar size={120} src={photo_100} />
            </div>
            <Title level='2' className="account__name">{first_name} {last_name}</Title>
            <Coins value={100} />
          </div>
          <Statistics />
          <Cell before={<ICONS.notification />} after={<Switch checked={value} onChange={notifications} />} onClick={notifications}>
            Уведомления
          </Cell>
          <a target='_blank' href='https://vk.com/my.peterburg' style={{ textDecoration: "none" }}>
            <Cell before={<ICONS.users />} after={<ICONS.chevronRight />} >
              Наше сообщесво
            </Cell>
          </a>
          <a target='_blank' href='https://vk.me/join/Pqkbsnnig33EVEPnN/vXCF1G7OkRCY_zLoY=' style={{ textDecoration: "none" }}>
            <Cell before={<ICONS.message />} after={<ICONS.chevronRight />}>
              Беседа
            </Cell>
          </a>
          <Cell before={<ICONS.cards />} after={<ICONS.chevronRight />} onClick={() => setActiveStory('moderation')}>
            Модерация
          </Cell>
        </Group>
      </Panel>
    </View>
  )
}

export default Account