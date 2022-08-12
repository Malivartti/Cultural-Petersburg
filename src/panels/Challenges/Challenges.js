import React from 'react'
import { View, Panel, PanelHeader, Div } from '@vkontakte/vkui'
import './index.css';
import CardsList from '../../Components/CardsList/CardsList';

const list = []

const Challenges = ({ id }) => {
  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false} after={<div>Добавить</div>}>Вызовы</PanelHeader>
        <Div className='subtitle'>Здесь ты найдешь множество заданий. Выполняя их сможешь заработать баллы и попасть на первое место в топе!</Div>
        <CardsList list={list} />
      </Panel>
    </View>
  )
}

export default Challenges