import React from 'react'
import { View, Panel, PanelHeader } from '@vkontakte/vkui'
import './index.css';

const Challenges = ({ id }) => {
  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader>Вызовы</PanelHeader>
      </Panel>
    </View>
  )
}

export default Challenges