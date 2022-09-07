import React from 'react'
import { View, Panel, PanelHeader } from '@vkontakte/vkui'
import './index.css';

const Store = ({ id }) => {
  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false}>Магазин</PanelHeader>
      </Panel>
    </View>
  )
}

export default Store