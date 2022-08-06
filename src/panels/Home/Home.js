import React, { useContext, useEffect, useState } from 'react'
import { View, Panel, PanelHeader } from '@vkontakte/vkui'
import './index.css';
import { User } from '../../context';
import Weather from '../../Components/Weather/Weather';
import CastomCardScroll from '../../Components/CastomCardScroll/CastomCardScroll';
import { getAttractions, getCulturalHeritageSites, getExhibitionHalls, getMuseums } from '../../api/cards';

const descr = "Уже несколько лет в Петербурге можно опять очутиться в сказке из детства, и своими собственными глазами увидеть корабль с настоящими алыми парусами! \nСамый незабываемый праздник в жизни каждого учащегося - выпускной - в Санкт-Петербурге отмечается не только эффектным фейерверком и потрясающим концертом, но и трогательным появлением в акватории Невы парусника из нашего детства."
const addres = "Дворцовая площадь"
const date = "24-25 июня 2022"
const cards = [{ header: "Выпускной Алые Паруса", descr, addres, date }, { header: "Экскурсия на Васильевско...", descr, addres, date }, { header: "Дворцовая площадь", descr, addres, date }, { header: "Зимний дворец", descr, addres, date }]

const Home = ({ id }) => {
  const { first_name } = useContext(User)
  const [exhibitionsHalls, setExhibitionsHalls] = useState({nextPageLink: "", cards: []});
  const [museums, setMuseums] = useState({nextPageLink: "", cards: []});
  const [attractions, setAttractions] = useState({nextPageLink: "", cards: []});
  const [culturalHeritagesSites, setCulturalHeritagesSites] = useState({nextPageLink: "", cards: []})

  useEffect(async () => {
    const [exhibitionsHallsUpadteLink, exhibitionsHalls] = await getExhibitionHalls()
    setExhibitionsHalls({ nextPageLink: exhibitionsHallsUpadteLink, cards: exhibitionsHalls })

    const [museumsUpadteLink, museums] = await getMuseums();
    setMuseums({ nextPageLink: museumsUpadteLink, cards: museums })

    const [attractionsUpadteLink, attractions] = await getAttractions();
    setAttractions({ nextPageLink: attractionsUpadteLink, cards: attractions })

    const [culturalHeritagesSitesUpadteLink, culturalHeritagesSites] = await getCulturalHeritageSites();
    setCulturalHeritagesSites({ nextPageLink: culturalHeritagesSitesUpadteLink, cards: culturalHeritagesSites })
  }, [])


  return (
    <View id={id} activePanel={id}>
      <Panel id={id}>
        <PanelHeader separator={false}>Добро пожаловать, {first_name}</PanelHeader>
        <Weather />
        <CastomCardScroll header="Выставочные залы" cards={exhibitionsHalls.cards} />
        <CastomCardScroll header="Музеи" cards={museums.cards} />
        <CastomCardScroll header="Достопримечательности" cards={attractions.cards} />
        <CastomCardScroll header="Объекты культурного наследия" cards={culturalHeritagesSites.cards} />
      </Panel>
    </View>
  )
}

export default Home