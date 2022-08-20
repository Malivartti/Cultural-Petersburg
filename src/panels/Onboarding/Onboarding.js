import React, { useContext } from 'react'
import { Group, Panel, Title, View } from '@vkontakte/vkui'
import './index.css';

import ICONS from '../../img/icons'
import saly from '../../img/saly.png'
import MyButton from '../../Components/UI/MyButton/MyButton';
import { AppNavigation } from '../../context';

const Onboarding = ({ id }) => {
  const {setActiveView} = useContext(AppNavigation)

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
          <MyButton onClick={toMain}>
            Начать <ICONS.arrowRight />
          </MyButton>
        </Group>
      </Panel>
    </View>
  )
}


export default Onboarding 