import { Div, InfoRow, Panel, PanelHeader, PanelHeaderBack, Title, View } from '@vkontakte/vkui'
import React, { useContext, useEffect, useState } from 'react'
import { geocoder } from '../../api/cards'
import LocationMap from '../../Components/LocationMap/LocationMap'
import { AppNavigation } from '../../context'
import './index.css'
import MyButton from '../../Components/UI/MyButton/MyButton'
import bridge from "@vkontakte/vk-bridge";
import Coins from '../../Components/Coins/Coins'

const CardPage = ({ id, data }) => {
  const { setActiveView } = useContext(AppNavigation);
  const [locationCoords, setLocationCoords] = useState([])
  const {header, toBack, title, img, points, ...props} = data
  const other = []
  for (const i in props) {
    other.push([i, props[i]])
  }

  useEffect(async () => {
    const coords = await geocoder(data["Адресс"])
    setLocationCoords(coords)
  }, [])

  function checkCoords() {
    bridge.send("VKWebAppGetGeodata")
  }

  return (
    <View id={id} activePanel={id}>
      <Panel id={id} >
        <PanelHeader left={<PanelHeaderBack onClick={() => setActiveView(toBack)} />} separator={false}>{header}</PanelHeader>
        <Div className='card-page'>
          <img className='card-page__img' src={img} alt='' />
          <Title className='card-page__title' level='2' >{title}</Title>
          <div className='card-page__meta'>{points && <Coins number={points} />}</div>
          {other.map(prop => 
            prop[1] && <InfoRow className='card-page__info' key={prop[0]} header={prop[0]}>{prop[1]}</InfoRow>
          )}
          <LocationMap center={locationCoords} />
          <MyButton onClick={checkCoords}>Получить очки</MyButton>
        </Div>
      </Panel>
    </View>
  )
}

export default CardPage