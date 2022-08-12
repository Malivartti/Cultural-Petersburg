import { Div, Panel, PanelHeader, PanelHeaderBack, Title, View } from '@vkontakte/vkui'
import React, { useContext } from 'react'
import { AppNavigation } from '../../context'
import './index.css'

const CardPage = ({ id, data }) => {
  const { setActiveView } = useContext(AppNavigation);

  return (
    <View id={id} activePanel={id}>
      <Panel id={id} >
        <PanelHeader left={<PanelHeaderBack onClick={() => setActiveView(data.toBack)} />} separator={false}>{data.header}</PanelHeader>
        <img className='card-page__img' src={data.src} alt='' />
        <Title level='3'>{data.title}</Title>
        <Div className='subtitle'>{data.descr}</Div>
        <Div className=''>{data.address}</Div>
      </Panel>
    </View>
  )
}

export default CardPage