import React, { useContext, useEffect, useState } from 'react'
import { View, Panel, PanelHeader } from '@vkontakte/vkui'
import './index.css';
import { User } from '../../context';
import Weather from '../../Components/Weather/Weather';
import CastomCardScroll from '../../Components/CastomCardScroll/CastomCardScroll';
import { getAttractions, getCulturalHeritageSites, getExhibitionHalls, getMuseums } from '../../api/cards';


const Home = ({ id }) => {
  const { first_name } = useContext(User)
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
        <PanelHeader separator={false}>Добро пожаловать, {first_name}</PanelHeader>
        <Weather />
        <CastomCardScroll header="Выставочные залы" cards={exhibitionsHalls}/>
        <CastomCardScroll header="Музеи" cards={museums}/>
        <CastomCardScroll header="Достопримечательности" cards={attractions}/>
        <CastomCardScroll header="Объекты культурного наследия" cards={culturalHeritagesSites}/>
      </Panel>
    </View>
  )
}

export default Home