import React from 'react'
import { Button, Group, Panel, Title, View } from '@vkontakte/vkui'
import './index.css';

import ICONS from '../../img/icons'
import saly from '../../img/saly.png'

const Onboarding = ({ id, setActiveView }) => {
  function toMain() {
    setActiveView("main")
  }

  return (
    <View id={id} activePanel={id}>
      <Panel id={id} >
        <Group className="onboarding">
          <Title className="onboarding__logo" level="2"><ICONS.logo fill="#2787F5"/> Культурный Петербург</Title>
          <img className="onboarding__saly" src={saly} alt="Saly"/>
          <Title className="onboarding__greetings">Привет, твой Петербург на связи 😃</Title>
          <div className="onboarding__descr">Это приложение создано для изучения города, открытия новых для себя мест и мониторинга событий</div>
          <Button className="onboarding__btn" size="l" onClick={toMain}>
            Начать <ICONS.arrowRight />
          </Button>
        </Group>
      </Panel>
    </View>
  )
}


export default Onboarding 