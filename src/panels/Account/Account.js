import React from 'react'
import { View, Panel, PanelHeader } from '@vkontakte/vkui'
import './index.css';

const Account = ({ id }) => {
  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader className='app'>Аккаунт</PanelHeader>
      </Panel>
    </View>
  )
}

export default Account