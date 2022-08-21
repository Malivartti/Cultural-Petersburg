import React, { useContext, memo } from 'react';
import { CardScroll, Group, Header, Spinner } from '@vkontakte/vkui'
import CastomCard from '../CastomCard/CastomCard';
import './index.css';
import { AppNavigation, AppData } from '../../context';

const CastomCardScroll = ({ header, cards }) => {
  const { setCardData, setLocationData } = useContext(AppData)
  const { setActiveView } = useContext(AppNavigation)

  function toLocations(header, cards) {
    setLocationData(header, cards)
    setActiveView('locations')
  } 

  function toCardPage(card) {
    setCardData({ ...card, header, toBack: 'main' })
    setActiveView('cardPage')
  }

  return (
    <Group
      mode='plane'
      separator='hide'
      header={
        <Header
          className="scroll__header"
          onClick={() => toLocations({ header, cards })}
        >
          {header}
        </Header>
      }>
      {
        cards.length
          ? <CardScroll size="s">
            {cards.slice(0, 7).map((card, i) =>
              <CastomCard
                key={i}
                item={card}
                onClick={() => toCardPage(card)}
              />)}
          </CardScroll>
          : <Spinner size="medium" style={{ margin: "20px 0" }} />
      }
    </Group>
  )
}

export default memo(CastomCardScroll)
