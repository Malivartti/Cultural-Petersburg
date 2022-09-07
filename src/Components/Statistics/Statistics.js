import { Div, Group, HorizontalCell, HorizontalScroll, Subhead, Tappable, Title } from '@vkontakte/vkui'
import React from 'react'
import './index.css'

const categories = [{ name: 'Вызовы', visits: 25 },
{ name: 'Выставочные залы', visits: 11 },
{ name: 'Музеи', visits: 7 },
{ name: 'Достопримечательности', visits: 9 },
{ name: 'Объекты культурного наследия', visits: 25 },
{ name: 'Объекты культурного наследия1', visits: 25 },
{ name: 'Объекты культурного наследия2', visits: 25 },
{ name: 'Объекты культурного наследия3', visits: 25 },
]
const allVisits = categories.reduce((acc, next) => [...acc, next.visits], [])
const maxVisits = Math.max(...allVisits)

const Statistics = () => {
  return (
    <div>
      <Div className='statistics__title'>
        <Title level="1">Статистика</Title>
        <Subhead>Здесь показана ваша статистика о посещенных местах, событиях и достопримечательносях</Subhead>
      </Div>
      <Group mode='plain'>
        <HorizontalScroll
          showArrows
          getScrollToLeft={(i) => i - 320}
          getScrollToRight={(i) => i + 320}
        >
          <Div
            className='statistics__slider'
          >
            {categories.map(category =>
              <Tappable key={category.name}>
                <div className='statistics__cell' >
                  <div className='statistics__cell-level'>
                    <div
                      className='statistics__item'
                      style={{ height: 100 * (category.visits / maxVisits) }}
                    >
                      {category.visits}
                    </div>
                  </div>
                  <div className='statistics__cell-name'>{category.name}</div>
                </div>
              </Tappable>
            )}
          </Div>
        </HorizontalScroll>
      </Group>
    </div>
  )
}

export default Statistics