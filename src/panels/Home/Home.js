import React from 'react'
import { View, Panel, PanelHeader } from '@vkontakte/vkui'
import './index.css';

const Home = ({ id }) => {
  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader>Добрый день</PanelHeader>
      </Panel>
    </View>
  )
}

export default Home