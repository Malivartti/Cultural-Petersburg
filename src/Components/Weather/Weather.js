import React, { useState, useEffect } from 'react'
import { Div, Title } from '@vkontakte/vkui'
import './index.css';

import { getWeather, getIcon } from "../../api/weather"

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(async () => {
    const date = await getWeather()
    const descr = date?.weather[0]?.description
    const temp = Math.round(date?.main?.temp)
    const icon = getIcon(date?.weather[0]?.icon)
    setWeather({ descr, temp, icon })
  }, [])

  return (
    <Div className='weather'>
      <div>
        <Title className="weather__title" level='2'>Сегодня в Петербурге {weather?.descr}, {weather?.temp}&nbsp;&deg;С</Title>
        <div className='subtitle'>Советуем вам выбраться на улицу, погулять со своими друзьями или животными, посетить достопримечательности Петербурга.</div>
      </div>
      <img className="weather__icon" src={weather?.icon} alt='' />
    </Div>
  )
}

export default Weather