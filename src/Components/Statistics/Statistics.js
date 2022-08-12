import { Div, Group, HorizontalCell, HorizontalScroll, Title } from '@vkontakte/vkui'
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
const allVisits = categories.reduce((acc, next) => acc + next.visits, 0)

const Statistics = () => {
  return (
    <div>
      <Div>
        <Title level="1">Статистика</Title>
        <div className='subtitle'>Здесь показана ваша статистика о посещенных местах, событиях и достопримечательносях</div>
      </Div>
      <Group>
        <HorizontalScroll
          showArrows
          getScrollToLeft={(i) => i - 120}
          getScrollToRight={(i) => i + 120}
        >
          <Div
            className='statistics__slider'
          >
            {categories.map(category =>
              <HorizontalCell
                key={category.name}
                className='statistics__cell'
                subtitle={category.name}
              >
                <div
                  className='statistics__item'
                  style={{ height: 200 * (category.visits / allVisits) }}
                >
                  {category.visits}
                </div>
              </HorizontalCell>
            )}
          </Div>
        </HorizontalScroll>
      </Group>
    </div>
  )
}

export default Statistics