import axios from "axios";
import _ from 'lodash'
import placeholder1 from '../img/placeholder/1.jpg'
import placeholder2 from '../img/placeholder/2.jpg'
import placeholder3 from '../img/placeholder/3.jpg'
import placeholder4 from '../img/placeholder/4.jpg'
import placeholder5 from '../img/placeholder/5.jpg'


const placeholders = [placeholder1, placeholder2, placeholder3, placeholder4, placeholder5]
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2a2lkMDAwMDAwMDAwIiwiZXhwIjoxNjczNTMzODUxfQ.mhO4ZBLZqybD8fNkg4wRK52oqsEXxOEIwglwmZh1NII";
const URL = {
  exhibitionHalls: "https://spb-classif.gate.petersburg.ru/api/v2/datasets/130/versions/latest/data/151?per_page=10000",
  museums: "https://spb-classif.gate.petersburg.ru/api/v2/datasets/139/versions/latest/data/569?per_page=10000",
  attractions: "https://spb-classif.gate.petersburg.ru/api/v2/datasets/134/versions/latest/data/157?per_page=10000",
  culturalHeritageSites: "https://spb-classif.gate.petersburg.ru/api/v2/datasets/261/versions/latest/data/436?per_page=10000",
  geocoder: "https://geocode.gate.petersburg.ru/parse/eas?street=",
}
const config = {
  headers: { Authorization: `Bearer ${TOKEN}` }
}
const points = 20;

export async function getExhibitionHalls() {
  try {
    const response = await axios.get(URL.exhibitionHalls, config)
    const trueArray = response.data.results.map(item => {
      return { title: item.name, Описание: item.description, img: _.sample(placeholders), points, Сайт: item.www, Тип: item.type, Телефон: item.phone, "Часы работы": item.work_time, Адресс: item.address_manual }
    })
    return trueArray
  } catch (e) {

  }
}

export async function getMuseums() {
  try {
    const response = await axios.get(URL.museums, config)
    const trueArray = response.data.results.map(item => {
      return { title: item.name, Описание: item.description, img: _.sample(placeholders), points, Сайт: item.www, Тип: item.type, Телефон: item.phone, "Часы работы": item.work_time, Адресс: item.address_manual }
    })
    return trueArray
  } catch (e) {

  }
}

export async function getAttractions() {
  try {
    const response = await axios.get(URL.attractions, config)
    const trueArray = response.data.results.map(item => {
      return { title: item.name, Описание: item.description, img: _.sample(placeholders), points, Сайт: item.www, Тип: item.obj_type, Телефон: item.phone, Адресс: item.address_manual }
    })
    return trueArray
  } catch (e) {

  }
}

export async function getCulturalHeritageSites() {
  try {
    const response = await axios.get(URL.culturalHeritageSites, config)
    const trueArray = response.data.results.map(item => {
      return { title: item.name_object, img: _.sample(placeholders), points, Датировка: item.date, Автор: item.author, Закон: item.base, Адресс: item.address }
    })
    return trueArray
  } catch (e) {

  }
}


export async function geocoder(address) {
  try {
    const response = await axios.get(URL.geocoder + address, config)
    return [response.data.Latitude, response.data.Longitude]
  } catch (e) {

  }
}