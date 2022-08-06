import React from 'react';
import { CardScroll, Div, Group, Header } from '@vkontakte/vkui'
import CastomCard from '../CastomCard/CastomCard';
import './index.css';

// onClick={() => setActivePanel(to)}
const CastomCardScroll = ({ header, cards, to }) => {
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
                onClick={() => console.log(card)}
              />)}
          </CardScroll>
          : <Div>Загрузка...</Div>
      }
    </Group>
  )
}

export default CastomCardScroll
