import React from 'react'
import { View, Panel, PanelHeader } from '@vkontakte/vkui'
import './index.css';

const Rating = ({ id }) => {
  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader>Рейтинг</PanelHeader>
      </Panel>
    </View>
  )
}

export default Rating