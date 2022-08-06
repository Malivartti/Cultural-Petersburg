import React from 'react'
import { ContentCard } from '@vkontakte/vkui'
import './index.css';

import ICONS from '../../img/icons'

const CastomCard = ({ header, onClick }) => {
  return (
    <ContentCard
      header={<div className="card__header">{header}</div>}
      caption={<div className="card__text">Подробнее <ICONS.arrowRight /></div>}
      src="https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg"
      height={110}
      onClick={onClick}
    />
  )
}

export default CastomCard