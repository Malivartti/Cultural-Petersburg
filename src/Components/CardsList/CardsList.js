import { CardGrid } from '@vkontakte/vkui'
import React, { useContext } from 'react'
import { AppNavigation, AppData } from '../../context'
import CastomCard from '../CastomCard/CastomCard'

const CardsList = ({ data, toBack }) => {
  const { setCardData } = useContext(AppData)
  const { setActiveView } = useContext(AppNavigation)

  function toCardPage(card) {
    setCardData({ ...card, header: "Вызов", toBack })
    setActiveView('cardPage')
  }

  return (
    <CardGrid size="m">
      {data.map((item, index) =>
        <CastomCard key={index} item={item} onClick={() => toCardPage(item)} />
      )}
    </CardGrid>
  )
}

export default CardsList