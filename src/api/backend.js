import axios from "axios";

const URL = 'https://xelene.ru/spb_helper/api/'
const ENDPOINTS = {
  account: 'account',
  loctions: 'calls/getAllLocal',
  file: 'docs/upload',
  newChallenge: 'calls/add'
}
const headers = {
  "Content-type": "application/json; charset=UTF-8"
}

export async function initApp(params) {
  const result = await axios.get(URL + ENDPOINTS.account, { params })
  data = result.data.response
  return result.data.response
}

export async function getLocations(offset, geolocation) {
  const result = await axios.post(URL + ENDPOINTS.loctions, {
    headers,
    data: JSON.stringify({offset, geolocation})
  })
  return result.data
}

export async function createChallenge(file, name, comment, geolocation) {
  const fileUrl = await axios.post(URL + ENDPOINTS.file, {
    data: {
      file
    }
  })
  axios.post(URL + ENDPOINTS.newChallenge, {
    data: {
      name,
      comment,
      geolocation,
      docs: [fileUrl.id]
    }
  })
}