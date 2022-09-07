import React, { useState, useEffect } from 'react'
import { Div, Title, Subhead, Group } from '@vkontakte/vkui'
import './index.css';

import { getWeather, getIcon } from "../../api/weather"
import { getWish } from '../../utils/wish';

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(async () => {
    const date = await getWeather()
    const descr = date?.weather[0]?.description
    const temp = Math.round(date?.main?.temp)
    const icon = getIcon(date?.weather[0]?.icon)
    const wish = getWish(date?.weather[0]?.id)
    setWeather({ descr, temp, icon, wish })
  }, [])

  return (
    <Group className='weather' mode="plain" separator="hide">
      <Div>
        <div className='weather__header'>
          <Title className="weather__title" level='2'>Сегодня в Петербурге {weather?.descr}, {weather?.temp}&nbsp;&deg;С</Title>
          <img className="weather__icon" src={weather?.icon} alt='' />
        </div>
        <Subhead>{weather.wish}</Subhead >
      </Div>
    </Group>
  )
}

export default Weather