import { Group, Panel, PanelHeader, PanelHeaderBack, View } from '@vkontakte/vkui'
import React, { useContext } from 'react'
import CardsList from '../../Components/CardsList/CardsList'
import { AppData, AppNavigation } from '../../context'

const Locations = ({ id }) => {
  const { setActiveStory } = useContext(AppNavigation)
  const { locationData } = useContext(AppData)

  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={() => setActiveStory('home')} />} separator={false}>{locationData.header}</PanelHeader>
        <Group>
          <CardsList data={locationData.cards} toBack="locations" />
        </Group>
      </Panel>
    </View>
  )
}

export default Locations