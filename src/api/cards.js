import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2a2lkMDAwMDAwMDAwIiwiZXhwIjoxNjczNTMzODUxfQ.mhO4ZBLZqybD8fNkg4wRK52oqsEXxOEIwglwmZh1NII";
const URL = {
  exhibitionHalls: "https://spb-classif.gate.petersburg.ru/api/v2/datasets/130/versions/latest/data/151",
  museums: "https://spb-classif.gate.petersburg.ru/api/v2/datasets/139/versions/latest/data/569",
  attractions: "https://spb-classif.gate.petersburg.ru/api/v2/datasets/134/versions/latest/data/157",
  culturalHeritageSites: "https://spb-classif.gate.petersburg.ru/api/v2/datasets/261/versions/latest/data/436",
}
const config = {
  headers: { Authorization: `Bearer ${TOKEN}` }
}

export async function getExhibitionHalls(nextPage) {
  try {
    const response = await axios.get(nextPage || URL.exhibitionHalls, config)
    const next = response.data
    const trueArray = response.data.results.map(item => {
      return { name: item.name, descr: item.description, address: item.address_manual, site: item.www, type: item.type, phone: item.phone, work: item.work_time }
    })
    return [next, trueArray]
  } catch (e) {

  }
}

export async function getMuseums(nextPage) {
  try {
    const response = await axios.get(nextPage || URL.museums, config)
    const next = response.data
    const trueArray = response.data.results.map(item => {
      return { name: item.name, descr: item.description, address: item.address_manual, site: item.www, type: item.type, phone: item.phone, work: item.work_time }
    })
    return [next, trueArray]
  } catch (e) {

  }
}

export async function getAttractions(nextPage) {
  try {
    const response = await axios.get(nextPage || URL.attractions, config)
    const next = response.data
    const trueArray = response.data.results.map(item => {
      return { name: item.name, descr: item.description, address: item.address_manual, site: item.www, type: item.obj_type, phone: item.phone }
    })
    return [next, trueArray]
  } catch (e) {

  }
}

export async function getCulturalHeritageSites(nextPage) {
  try {
    const response = await axios.get(nextPage || URL.culturalHeritageSites, config)
    const next = response.data.next
    const trueArray = response.data.results.map(item => {
      return { name: item.name_object, address: item.address, author: item.author, date: item.date, law: item.base }
    })
    return [next, trueArray]
  } catch (e) {

  }
}

