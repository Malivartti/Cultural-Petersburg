import { ContentCard } from '@vkontakte/vkui'
import React from 'react'
import ICONS from '../../img/icons'
import Coins from '../Coins/Coins'

const ChallengeCard = ({item, onClick}) => {
  return (
    <ContentCard
      header={<div className="card__header">{header}</div>}
      text={<Coins number={item.score}/>}
      caption={<div className="card__text">Подробнее <ICONS.arrowRight /></div>}
      src={item.src}
      height={110}
      onClick={onClick}
    />
  )
}

export default ChallengeCard