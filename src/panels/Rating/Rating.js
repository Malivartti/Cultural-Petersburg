import React, { useContext } from 'react'
import { View, Panel, PanelHeader, Div } from '@vkontakte/vkui'
import './index.css';
import Top3 from '../../Components/Top3/Top3';
import { User } from '../../context/index'
import TopList from '../../Components/TopList/TopList';

const Rating = ({ id }) => {
  const { first_name, last_name, photo_100 } = useContext(User)
  const users = [
    { first_name, last_name, photo: photo_100, score: 302 },
    { first_name, last_name, photo: photo_100, score: 299 },
    { first_name, last_name, photo: photo_100, score: 284 },
    { first_name, last_name, photo: photo_100, score: 254 },
    { first_name, last_name, photo: photo_100, score: 243 },
    { first_name, last_name, photo: photo_100, score: 230 },
    { first_name, last_name, photo: photo_100, score: 217 },
    { first_name, last_name, photo: photo_100, score: 210 },
    { first_name, last_name, photo: photo_100, score: 189 },
    { first_name, last_name, photo: photo_100, score: 172 },
    { first_name, last_name, photo: photo_100, score: 157 },
  ]

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false}>Рейтинг</PanelHeader>
        <Div className='subtitle'>Список самых быстрых смелых людей, путешествующих по Питеру</Div>
        <Top3 users={users.slice(0, 3)} />
        <TopList users={users.slice(3, 11)} currentUser={{ first_name, last_name, photo: photo_100, score: 100, place: 1002 }}/>
      </Panel>
    </View>
  )
}

export default Rating