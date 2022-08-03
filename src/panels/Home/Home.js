import React, { useContext } from 'react'
import { View, Panel, PanelHeader } from '@vkontakte/vkui'
import './index.css';
import { User } from '../../context';
import Weather from '../../Components/Weather/Weather';


const Home = ({ id }) => {
  const { first_name } = useContext(User)

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false}>Добро пожаловать, {first_name}</PanelHeader>
        <Weather />
      </Panel>
    </View>
  )
}

export default Home