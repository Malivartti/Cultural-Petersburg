const SERVER_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "eee1cd17e13322cf43e90f619f3b4197";

export async function getWeather() {
  const response = await fetch(getCityUrl("Санкт-Петербург"));
  return response.json();
}

export function getIcon(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`
}

function getCityUrl(cityName) {
  return `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=ru`;
}
