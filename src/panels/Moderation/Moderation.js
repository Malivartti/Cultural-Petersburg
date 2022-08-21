import React, { useState, useContext } from 'react'
import { Div, FormItem, FormLayout, FormLayoutGroup, Input, Panel, PanelHeader, PanelHeaderBack, View } from '@vkontakte/vkui'
import CastomCard from '../../Components/CastomCard/CastomCard'
import { AppNavigation, AppData } from '../../context'
import { isNumber } from '../../utils/number'
import MyButton from '../../Components/UI/MyButton/MyButton'
import './index.css'

const cards = [
  {
    toBack: 'moderation',
    header: 'Хороший пример',
    title: "Посетить Пулковский парк",
    descr: "Пулковский парк в Санкт-Петербурге – просторное живописное место отдыха, «глоток спокойствия» и зелени среди бесконечных многоэтажек и сети городских дорог. Этот «зеленый остров» находится к югу от площади Победы в Московском районе Петербурга.",
    address: "Московское ш., 196158",
    img: 'https://peterburg2.ru/uploads/15/09/29/ga2_122_0.jpg',
    points: 50,
    days: 3
  },
  {
    toBack: 'moderation',
    header: 'Плохой пример',
    title: "Подмести двор на Пушкинской",
    descr: "Идешь по адресу: ул. Пушкинская, д.7 - и подметаешь двор. Хочу, чтобы он был чистым и опрятным, чтобы гулять и проводить время. Самому мне лень, а ты поработай.",
    address: "Ул. Пушкинская, д.7",
    img: 'https://pw.artfile.me/wallpaper/19-03-2017/650x434/goroda-sankt-peterburg--petergof--rossiy-1142933.jpg',
    points: 20,
    days: 3
  },
  {
    toBack: 'moderation',
    header: 'Вызов',
    title: "Посетить «Алые Паруса»",
    descr: "Тебе нужно попасть на самый незабываемый праздник в жизни каждого учащегося - выпускной «Алые Паруса». Парусник появляется в конце праздника в акватории Невы. За это ты получишь награду",
    address: "Дворцовая площадь",
    img: 'https://spbboats.ru/upload/images/news/alye-parusa-02.jpg',
  },
]

const Moderation = ({ id }) => {
  const { setCardData } = useContext(AppData)
  const { setActiveView } = useContext(AppNavigation)

  const [points, setPoints] = useState({ value: "", error: "" })
  const [days, setDays] = useState({ value: "", error: "" })

  function toCardPageExample(card) {
    setCardData(card)
    setActiveView('cardPage')
  }

  function toCardPageCurrent() {
    setCardData(cards[2], points.value, points.days)
    setActiveView('cardPage')
  }

  function onChangePoints(e) {
    const value = e.target.value
    if (!isNumber(value)) {
      setPoints({ value, error: "Введите число" })
    } else if (+value < 20 || +value > 100) {
      setPoints({ value, error: "Введите число в диапазоне от 20 до 100" })
    } else {
      setPoints({ value, error: "" })
    }
  }

  function onChangeDays(e) {
    const value = e.target.value
    if (!isNumber(value)) {
      setDays({ value, error: "Введите число" })
    } else if (+value < 1 || +value > 30) {
      setDays({ value, error: "Введите число в диапазоне от 1 до 30" })
    } else {
      setDays({ value, error: "" })
    }
  }

  function toAccept() {
    if ((!points.error && points.value) && (!days.error && days.value)) {
      console.log('accepted')
    }
  }

  function toReject() {
    console.log("rejected")
  }


  return (
    <View id={id} activePanel={id}>
      <Panel id={id} >
        <PanelHeader left={<PanelHeaderBack onClick={() => setActiveView('main')} />} separator={false}>Модерация</PanelHeader>
        <Div className='moderation__comparison'>
          <div className="moderation__comparison-item">
            <div className='moderation__comparison-title moderation__comparison-title_green'>Хороший пример</div>
            <CastomCard item={cards[0]} onClick={() => toCardPageExample(cards[0])} />
          </div>
          <div className="moderation__comparison-item">
            <div className='moderation__comparison-title moderation__comparison-title_red'>Плохой пример</div>
            <CastomCard item={cards[1]} onClick={() => toCardPageExample(cards[1])} />
          </div>
        </Div>
        <Div>
          <div className='moderation__comparison-title'>Модерируемый вызов</div>
          <CastomCard item={{ ...cards[2], points: points.value, days: days.value }} onClick={toCardPageCurrent} />
        </Div>
        <FormLayout>
          <FormItem
            top="Размер награды"
            status={points.error ? "error" : "valid"}
            bottom={points.error}
          >
            <Input placeholder='Введите кол-во баллов' value={points.value} onChange={onChangePoints} />
          </FormItem>
          <FormItem
            top="Срок действия в днях"
            status={days.error ? "error" : "valid"}
            bottom={days.error}
          >
            <Input placeholder='Например: 3' value={days.value} onChange={onChangeDays} />
          </FormItem>
          <FormLayoutGroup mode="horizontal">
            <FormItem style={{ display: "flex", justifyContent: "center" }}>
              <MyButton className="moderation__btn moderation__btn_red" onClick={toReject}>Отклонить</MyButton>
            </FormItem>
            <FormItem style={{ display: "flex", justifyContent: "center" }}>
              <MyButton className="moderation__btn" onClick={toAccept}>Выпустить</MyButton>
            </FormItem>
          </FormLayoutGroup>
        </FormLayout>
      </Panel>
    </View>
  )
}

export default Moderation