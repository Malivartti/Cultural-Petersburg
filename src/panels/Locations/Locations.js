import { Panel, PanelHeader, PanelHeaderBack, View } from '@vkontakte/vkui'
import React, { useContext } from 'react'
import CardsList from '../../Components/CardsList/CardsList'
import { AppNavigation } from '../../context'

const Locations = ({ id, data }) => {
  const { setActiveView } = useContext(AppNavigation)

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={() => setActiveView('main')} />} separator={false}>{data.header}</PanelHeader>
        <CardsList data={data.cards} toBack="locations"/>
      </Panel>
    </View>
  )
}

export default Locations