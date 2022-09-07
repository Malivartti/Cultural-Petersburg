import React, { useContext, useEffect, useState } from 'react'
import { View, Panel, PanelHeader, Group, Div } from '@vkontakte/vkui'
import './index.css';
import { User } from '../../context';
import Weather from '../../Components/Weather/Weather';
import CastomCardScroll from '../../Components/CastomCardScroll/CastomCardScroll';
import { getAttractions, getCulturalHeritageSites, getExhibitionHalls, getMuseums } from '../../api/cards';


const Home = ({ id }) => {
  const { fetchedUser: {first_name} } = useContext(User)
  const [exhibitionsHalls, setExhibitionsHalls] = useState([]);
  const [museums, setMuseums] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [culturalHeritagesSites, setCulturalHeritagesSites] = useState([])

  useEffect(async () => {
    setExhibitionsHalls(await getExhibitionHalls());
    setMuseums(await getMuseums());
    setAttractions(await getAttractions());
    setCulturalHeritagesSites(await getCulturalHeritageSites());
  }, [])


  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false}>Привет, {first_name}!</PanelHeader>
        <Group separator="hide">
          <Weather />
          <CastomCardScroll header="Выставочные залы" cards={exhibitionsHalls} />
          <CastomCardScroll header="Музеи" cards={museums} />
          <CastomCardScroll header="Достопримечательности" cards={attractions} />
          <CastomCardScroll header="Объекты культурного наследия" cards={culturalHeritagesSites} />
        </Group>
      </Panel>
    </View>
  )
}

export default Home