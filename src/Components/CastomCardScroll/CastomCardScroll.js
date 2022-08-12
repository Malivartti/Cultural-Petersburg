import React, { useContext } from 'react';
import { CardScroll, Div, Group, Header } from '@vkontakte/vkui'
import CastomCard from '../CastomCard/CastomCard';
import './index.css';
import { AppNavigation, CardPageData } from '../../context';

const CastomCardScroll = ({ header, cards }) => {
  const setCardData = useContext(CardPageData)
  const {setActiveView} = useContext(AppNavigation)

  function toCardPage(card) {
    setCardData({...card, header, toBack: 'main'})
    setActiveView('cardPage')
  }
  return (
    <Group
      mode='plane'
      separator='hide'
      header={<Header className="scroll__header">{header}</Header>}>
      {
        cards.length
          ? <CardScroll size="s">
            {cards.slice(0, 7).map((card, i) =>
              <CastomCard
                key={i}
                header={card.name}
                onClick={() => toCardPage(card)}
              />)}
          </CardScroll>
          : <Div>Загрузка...</Div>
      }
    </Group>
  )
}

export default CastomCardScroll
