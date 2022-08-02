import React from 'react'
import { Button, Panel, View } from '@vkontakte/vkui'
import './index.css';

import ICONS from '../../img/icons'
import saly from '../../img/saly.png'

const Onboarding = ({ id, setActiveView }) => {
  function toMain() {
    setActiveView("main")
  }

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <div style={{display: "flex"}}><ICONS.logo fill="red" /> Культурный Петербург</div>
        <img src={saly} alt="Saly" width="185px"/>
        <div>Привет, твой Петербург на связи 😃</div>
        <div>Это приложение создано для изучения города, открытия новых для себя мест и мониторинга событий</div>
        <Button size="l" mode="secondary" onClick={toMain}>
          Начать
        </Button>
      </Panel>
    </View>
  )
}


export default Onboarding 