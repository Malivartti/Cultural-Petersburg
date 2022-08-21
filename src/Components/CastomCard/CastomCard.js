import React from 'react'
import { ContentCard } from '@vkontakte/vkui'
import './index.css';
import Coins from '../Coins/Coins'
import Days from '../Days/Days'
import ICONS from '../../img/icons'

const CastomCard = ({ item, onClick }) => {
  return (
    <ContentCard
      className="card"
      header={<div className="card__header">{item.title}</div>}
      text={
        <div className='card__meta'>
          {item.points && <Coins value={item.points}/>}
          {item.days && <Days value={item.days} />}
        </div>
        }
      caption={<div className="card__text">Подробнее <ICONS.arrowRight /></div>}
      src={item.img}
      height={110}
      onClick={onClick}
    />
  )
}

export default CastomCard