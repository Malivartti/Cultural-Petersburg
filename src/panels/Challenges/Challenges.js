import React, { useContext } from 'react'
import { View, Panel, PanelHeader, Div } from '@vkontakte/vkui'
import './index.css';
import CardsList from '../../Components/CardsList/CardsList';
import ICONS from '../../img/icons';
import { AppNavigation } from '../../context';

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
  const { setActiveView } = useContext(AppNavigation)
  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false} onClick={() => setActiveView('createchallege')}><div className='challenges__title'>Вызовы {<ICONS.add fill="#2787F5" />}</div></PanelHeader>
        <Div className='subtitle'>Здесь ты найдешь множество заданий. Выполняя их сможешь заработать баллы и попасть на первое место в топе!</Div>
        <CardsList data={list} toBack="main" />
      </Panel>
    </View>
  )
}

export default Challenges