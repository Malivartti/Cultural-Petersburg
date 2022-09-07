import React from 'react'
import { Panel, Title, View, Subhead, Group, SplitLayout, SplitCol } from '@vkontakte/vkui'
import './index.css';

import ICONS from '../../img/icons'
import saly from '../../img/saly.png'
import MyButton from '../../Components/UI/MyButton/MyButton';


const Onboarding = ({ id, isDesktop, setActiveView }) => {

  function toMain() {
    setActiveView("main")
  }

  return (
    <View id={id} activePanel={id}>
      <Panel id={id} >
        <SplitLayout style={{ justifyContent: "center" }}>
          <SplitCol
            animate={!isDesktop}
            spaced={isDesktop}
            width={isDesktop ? "680px" : "100%"}
            maxWidth={isDesktop ? "680px" : "100%"}
          >
            <Group>
              <div className="onboarding">
                <Title className="onboarding__logo" level="2"><ICONS.logo fill="#2787F5" /> Культурный Петербург</Title>
                <img className="onboarding__saly" src={saly} alt="Saly" />
                <Title className="onboarding__greetings">Привет, твой Петербург на связи 😃</Title>
                <Subhead className="onboarding__descr">Это приложение создано для изучения города, открытия новых для себя мест и мониторинга событий</Subhead>
                <MyButton onClick={toMain}>
                  Начать <ICONS.arrowRight />
                </MyButton>
              </div>
            </Group>
          </SplitCol>
        </SplitLayout>

      </Panel>
    </View>
  )
}


export default Onboarding 