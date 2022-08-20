import React, { useState, useContext } from 'react'
import { Div, FormItem, FormLayout, FormLayoutGroup, Input, Panel, PanelHeader, PanelHeaderBack, View } from '@vkontakte/vkui'
import CastomCard from '../../Components/CastomCard/CastomCard'
import { AppNavigation, AppData } from '../../context'
import { isNumber } from '../../utils/number'
import MyButton from '../../Components/UI/MyButton/MyButton'
import './index.css'
const cards = [
  { toBack: 'moderation', header: 'Хороший пример', title: "Посетить Пулковский парк", descr: "Пулковский парк в Санкт-Петербурге – просторное живописное место отдыха, «глоток спокойствия» и зелени среди бесконечных многоэтажек и сети городских дорог. Этот «зеленый остров» находится к югу от площади Победы в Московском районе Петербурга.", img: 'https://img3.akspic.ru/attachments/crops/8/0/5/5/45508/45508-nauka-nebo-ozero_pejto-pustynya-ekosistema-1920x1080.jpg', points: 30 }
]

const Moderation = ({ id }) => {
  const { setCardData } = useContext(AppData)
  const { setActiveView } = useContext(AppNavigation)

  const [points, setPoints] = useState('')
  const [days, setDays] = useState('')

  function toCardPage() {
    setCardData(cards[0])
    setActiveView('cardPage')
  }

  function onSubmit(e) {
    console.log(e, "Slci")
  }

  return (
    <View id={id} activePanel={id}>
      <Panel id={id} >
        <PanelHeader left={<PanelHeaderBack onClick={() => setActiveView('main')} />} separator={false}>Модерация</PanelHeader>
        <Div className='moderation__comparison'>
          <div className="moderation__comparison-item">
            <div className='moderation__comparison-title moderation__comparison-title_green'>Хороший пример</div>
            <CastomCard item={cards[0]} onClick={toCardPage} />
          </div>
          <div className="moderation__comparison-item">
            <div className='moderation__comparison-title moderation__comparison-title_red'>Плохой пример</div>
            <CastomCard item={cards[0]} onClick={toCardPage} />
          </div>
        </Div>
        <Div>
          <div className='moderation__comparison-title'>Модерируемое задание</div>
          <CastomCard item={{ ...cards[0], points }} onClick={toCardPage} />
        </Div>
        <FormLayout onSubmit={onSubmit}>
          <FormItem
            top="Размер награды"

          >
            <Input placeholder='Введите кол-во баллов' value={points} onChange={e => setPoints(e.target.value)} />
          </FormItem>
          <FormItem
            top="Срок действия в днях"

          >
            <Input placeholder='Например: 3' value={days} onChange={e => setDays(e.target.value)} />
          </FormItem>
          <FormLayoutGroup mode="horizontal">
            <FormItem style={{ display: "flex", justifyContent: "center" }}>
              <MyButton className="moderation__btn moderation__btn_red">Отклонить</MyButton>
            </FormItem>
            <FormItem style={{ display: "flex", justifyContent: "center" }}>
              <MyButton className="moderation__btn" >Выпустить</MyButton>
            </FormItem>
          </FormLayoutGroup>
        </FormLayout>
      </Panel>
    </View>
  )
}

export default Moderation