import React, { useState, useContext } from 'react'
import { Div, FormItem, FormLayout, Input, Panel, PanelHeader, PanelHeaderBack, View } from '@vkontakte/vkui'
import CastomCard from '../../Components/CastomCard/CastomCard'
import { AppNavigation, CardPageData } from '../../context'
import { isNumber } from '../../utils/number'
import MyButton from '../../Components/UI/MyButton/MyButton'
import './index.css'
const cards = [
  { toBack: 'moderation', header: 'Хороший пример', title: "Посетить Пулковский парк", descr: "Пулковский парк в Санкт-Петербурге – просторное живописное место отдыха, «глоток спокойствия» и зелени среди бесконечных многоэтажек и сети городских дорог. Этот «зеленый остров» находится к югу от площади Победы в Московском районе Петербурга.", src: 'https://img3.akspic.ru/attachments/crops/8/0/5/5/45508/45508-nauka-nebo-ozero_pejto-pustynya-ekosistema-1920x1080.jpg' }
]

const Moderation = ({ id }) => {
  const setCardData = useContext(CardPageData)
  const { setActiveView } = useContext(AppNavigation)

  const [points, setPoints] = useState('')
  const [days, setDays] = useState('')

  function toCardPage() {
    setCardData(cards[0])
    setActiveView('cardPage')
  }



  return (
    <View id={id} activePanel={id}>
      <Panel id={id} >
        <PanelHeader left={<PanelHeaderBack onClick={() => setActiveView('main')} />} separator={false}>Модерация</PanelHeader>
        <Div className='moderation__comparison'>
          <div className="moderation__comparison-item">
            <div className='moderation__comparison-title moderation__comparison-title_green'>Хороший пример</div>
            <CastomCard header='Посетить «Алые Паруса»' onClick={toCardPage} />
          </div>
          <div className="moderation__comparison-item">
            <div className='moderation__comparison-title moderation__comparison-title_red'>Плохой пример</div>
            <CastomCard header='Посетить «Алые Паруса»' onClick={toCardPage} />
          </div>
        </Div>
        <FormLayout>
          <FormItem
            top="Размер награды"
            status={isNumber(points) ? "valid" : "error"}
            bottom={
              isNumber(points)
                ? (+points > 0) && (+number < 101)
                  ? ""
                  : "Введите число в диапазоне от 1 до 100"
                : "Пожалуйста, введите правильное значение"
            }>
            <Input placeholder='Введите кол-во баллов' value={points} onChange={e => setPoints(e.target.value)} />
          </FormItem>
          <FormItem
            top="Срок действия в днях"
            status={isNumber(days) ? "valid" : "error"}
            bottom={
              isNumber(days)
                ? (+days > 0) && (+days < 31)
                  ? ""
                  : "Введите число в диапазоне от 1 до 30"
                : "Пожалуйста, введите правильное значение"
            }>
            <Input placeholder='Например: 3' value={days} onChange={e => setDays(e.target.value)} />
          </FormItem>
        </FormLayout>
        <MyButton className="moderation__btn">Выпустить в каталог</MyButton>
      </Panel>
    </View>
  )
}

export default Moderation