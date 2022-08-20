import React from 'react'
import { ContentCard } from '@vkontakte/vkui'
import './index.css';
import Coins from '../Coins/Coins'
import ICONS from '../../img/icons'

const CastomCard = ({ item, onClick }) => {
  return (
    <ContentCard
      className="card"
      header={<div className="card__header">{item.title}</div>}
      text={item.points && <Coins number={item.points}/>}
      caption={<div className="card__text">Подробнее <ICONS.arrowRight /></div>}
      src={item.img}
      height={110}
      onClick={onClick}
    />
  )
}

export default CastomCard