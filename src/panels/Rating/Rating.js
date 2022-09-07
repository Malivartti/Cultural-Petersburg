import React, { useContext } from 'react'
import { View, Panel, PanelHeader, Subhead, Group, Div } from '@vkontakte/vkui'
import './index.css';
import Top3 from '../../Components/Top3/Top3';
import { User } from '../../context/index'
import TopList from '../../Components/TopList/TopList';

const Rating = ({ id }) => {
  const { fetchedUser: { first_name, last_name, photo_100 } } = useContext(User)
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
    { first_name, last_name, photo: photo_100, score: 157 },
    { first_name, last_name, photo: photo_100, score: 157 },
    { first_name, last_name, photo: photo_100, score: 157 },
    { first_name, last_name, photo: photo_100, score: 157 },
    { first_name, last_name, photo: photo_100, score: 157 },
    { first_name, last_name, photo: photo_100, score: 157 },
  ]

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false}>Рейтинг</PanelHeader>
        <Group separator='hide'>
          <Div>
            <Subhead className='subtitle'>Список самых быстрых смелых людей, путешествующих по Питеру</Subhead>
            <Top3 users={users.slice(0, 3)} />
          </Div>
          <TopList users={users.slice(3, 20)} currentUser={{ first_name, last_name, photo: photo_100, score: 100, place: 1002 }} />
        </Group>
      </Panel>
    </View>
  )
}

export default Rating