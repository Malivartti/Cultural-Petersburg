import React, { useContext, memo } from 'react';
import { CardScroll, Group, Header, Spinner, useAdaptivity, ViewWidth } from '@vkontakte/vkui'
import CastomCard from '../CastomCard/CastomCard';
import './index.css';
import { AppNavigation, AppData } from '../../context';

const CastomCardScroll = ({ header, cards }) => {
  const { setCardData, setLocationData } = useContext(AppData)
  const { setActiveStory } = useContext(AppNavigation)

  const { viewWidth } = useAdaptivity();
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET

  function toLocations(header, cards) {
    setLocationData(header, cards)
    setActiveStory('locations')
  }

  function toCardPage(card) {
    setCardData({ ...card, header, toBack: 'home' })
    setActiveStory('cardPage')
  }

  return (
    <Group
      mode="plain"
      separator='hide'
      header={
        <Header onClick={() => toLocations({ header, cards })}>
          <div className="scroll__header">{header}</div>
        </Header>
      }>
      {
        cards.length
          ? <CardScroll size={isDesktop ? "s" : "m"}>
            {cards.slice(0, 10).map((card, i) =>
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
