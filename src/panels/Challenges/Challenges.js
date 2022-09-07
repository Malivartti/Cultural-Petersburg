import React, { useContext, useEffect } from 'react'
import { View, Panel, PanelHeader, Div, Group, Subhead } from '@vkontakte/vkui'
import './index.css';
import CardsList from '../../Components/CardsList/CardsList';
import ICONS from '../../img/icons';
import { AppNavigation } from '../../context';
import { getLocations } from '../../api/backend';

const list = [
  { title: "Выпускной Алые Паруса", Описание: "Тебе нужно попасть на самый незабываемый праздник в жизни каждого учащегося - выпускной «Алые Паруса». Парусник появляется в конце праздника в акватории Невы. За это ты получишь награду", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Shou_alie_parusa.jpg", Адресс: "Санкт-Петербург, Дворцовая площадь", points: 60, days: 3 },
  { title: "Выпускной Алые Паруса", Описание: "Тебе нужно попасть на самый незабываемый праздник в жизни каждого учащегося - выпускной «Алые Паруса». Парусник появляется в конце праздника в акватории Невы. За это ты получишь награду", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Shou_alie_parusa.jpg", Адресс: "Санкт-Петербург, Дворцовая площадь", points: 60, days: 3 },
  { title: "Выпускной Алые Паруса", Описание: "Тебе нужно попасть на самый незабываемый праздник в жизни каждого учащегося - выпускной «Алые Паруса». Парусник появляется в конце праздника в акватории Невы. За это ты получишь награду", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Shou_alie_parusa.jpg", Адресс: "Санкт-Петербург, Дворцовая площадь", points: 60, days: 3 },
  { title: "Выпускной Алые Паруса", Описание: "Тебе нужно попасть на самый незабываемый праздник в жизни каждого учащегося - выпускной «Алые Паруса». Парусник появляется в конце праздника в акватории Невы. За это ты получишь награду", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Shou_alie_parusa.jpg", Адресс: "Санкт-Петербург, Дворцовая площадь", points: 60, days: 3 },
  { title: "Выпускной Алые Паруса", Описание: "Тебе нужно попасть на самый незабываемый праздник в жизни каждого учащегося - выпускной «Алые Паруса». Парусник появляется в конце праздника в акватории Невы. За это ты получишь награду", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Shou_alie_parusa.jpg", Адресс: "Санкт-Петербург, Дворцовая площадь", points: 60, days: 3 },
  { title: "Выпускной Алые Паруса", Описание: "Тебе нужно попасть на самый незабываемый праздник в жизни каждого учащегося - выпускной «Алые Паруса». Парусник появляется в конце праздника в акватории Невы. За это ты получишь награду", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Shou_alie_parusa.jpg", Адресс: "Санкт-Петербург, Дворцовая площадь", points: 60, days: 3 },
  { title: "Выпускной Алые Паруса", Описание: "Тебе нужно попасть на самый незабываемый праздник в жизни каждого учащегося - выпускной «Алые Паруса». Парусник появляется в конце праздника в акватории Невы. За это ты получишь награду", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Shou_alie_parusa.jpg", Адресс: "Санкт-Петербург, Дворцовая площадь", points: 60, days: 3 },
]

const Challenges = ({ id }) => {
  const { setActiveStory } = useContext(AppNavigation)

  useEffect(async () => {
    const data = await getLocations(1, [30.315877, 59.939099])
  }, [])

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false} onClick={() => setActiveStory('createchallege')}><div className='challenges__title'>Вызовы <ICONS.add className='challenges__icon' fill="#2787F5" /></div></PanelHeader>
        <Group>
          <Div >
            <Subhead className='subtitle'>
              Здесь ты найдешь множество заданий. Выполняя их сможешь заработать баллы и попасть на первое место в топе!
            </Subhead>
          </Div>
          <CardsList data={list} toBack="challenges" />
        </Group>
      </Panel>
    </View>
  )
}

export default Challenges