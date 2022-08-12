import { CardGrid } from '@vkontakte/vkui'
import React from 'react'
import ChallengeCard from '../ChallengeCard/ChallengeCard'

const CardsList = ({list}) => {
  return (
    <CardGrid size="s">
      {list.map(item => 
      <ChallengeCard item={item} onClick={() => console.log(item)}/>
      )}
    </CardGrid>
  )
}

export default CardsList