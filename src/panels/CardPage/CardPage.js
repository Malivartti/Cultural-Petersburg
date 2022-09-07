import { Div, InfoRow, Panel, PanelHeader, PanelHeaderBack, Title, View, ScreenSpinner, Group } from '@vkontakte/vkui'
import React, { useContext, useEffect, useState } from 'react'
import { geocoder } from '../../api/cards'
import LocationMap from '../../Components/LocationMap/LocationMap'
import { AppData, AppNavigation } from '../../context'
import './index.css'
import MyButton from '../../Components/UI/MyButton/MyButton'
import bridge from "@vkontakte/vk-bridge";
import Coins from '../../Components/Coins/Coins'
import Days from '../../Components/Days/Days'

const CardPage = ({ id }) => {
  const { setActiveStory, setActiveModal, setPopout } = useContext(AppNavigation);
  const { cardData } = useContext(AppData);
  const [locationCoords, setLocationCoords] = useState([])
  const { header, toBack, title, img, points = "", days = "", ...props } = cardData
  const other = []
  for (const i in props) {
    other.push([i, props[i]])
  }

  useEffect(async () => {
    const coords = await geocoder(cardData["Адресс"])
    if (coords[0] && coords[1]) {
      setLocationCoords(coords)
    }
  }, [])

  function checkCoords() {
    setActiveModal('confirmchallengeexecution')
  }

  return (
    <View id={id} activePanel={id}>
      <Panel id={id} >
        <PanelHeader before={<PanelHeaderBack onClick={() => setActiveStory(toBack)} />} separator={false}>{header}</PanelHeader>
        <Group>
          <Div className='card-page'>
            <img className='card-page__img' src={img} alt='' />
            <Title className='card-page__title' level='2' >{title}</Title>
            <div className='card-page__meta'>
              {points && <Coins value={points} />}
              {days && <Days value={days} />}
            </div>
            {other.map(prop =>
              prop[1] && <InfoRow className='card-page__info' key={prop[0]} header={prop[0]}>{prop[1]}</InfoRow>
            )}
            <LocationMap center={locationCoords} />
            <MyButton onClick={checkCoords}>Получить очки</MyButton>
          </Div>
        </Group>
      </Panel>
    </View>
  )
}

export default CardPage