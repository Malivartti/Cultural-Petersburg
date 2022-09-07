import React, { useContext } from 'react'
import { ANDROID, Div, IOS, ModalPage, ModalPageHeader, PanelHeaderButton, Text, useAdaptivity, usePlatform, ViewWidth } from '@vkontakte/vkui';
import { AppNavigation } from '../../context';
import './index.css';
import img from '../../img/gestures/1.jpg'

import ICONS from '../../img/icons';
import { Icon24Dismiss } from '@vkontakte/icons';

import MyButton from '../../Components/UI/MyButton/MyButton';
import MyInputFile from '../../Components/UI/MyInputFile/MyInputFile'

const ConfirmChallengeExecution = ({ id }) => {
  const { setActiveModal } = useContext(AppNavigation)
  const { viewWidth } = useAdaptivity()
  const isMobile = viewWidth <= ViewWidth.MOBILE;
  const platform = usePlatform()

  return (
    <ModalPage
      id={id}
      header={
        <ModalPageHeader
          before={
            isMobile &&
            platform === ANDROID && (
              <PanelHeaderClose onClick={() => setActiveModal(null)} />
            )
          }
          after={
            platform === IOS && (
              <PanelHeaderButton onClick={() => setActiveModal(null)}>
                <Icon24Dismiss />
              </PanelHeaderButton>
            )
          }>
          Выполнить вызов
        </ModalPageHeader>
      }>
      <Div className='modal'>
        <img className='modal__img' src={img} alt="" />
        <Text className="modal__text">Для того, чтобы наши модераторы смогли проверить выполение данного задания, сделайте селфи на фоне места «Дворцовая площадь» и покажите рукой жест «Класс!»</Text>
        <MyInputFile />

        <MyButton onClick={() => setActiveModal(null)} className="modal__btn">
          Отправить <ICONS.arrowRight />
        </MyButton>
      </Div>
    </ModalPage>
  )
}

export default ConfirmChallengeExecution