const wishes = {
  thunderstorm: "Рекомендуем пока на улице бушует гроза ознакомиться с новыми вызовами, а так же посмотреть места, в которых вы никогда небыли ",
  drizzle: "Рекомендуем посетить мероприятия и события которые вы можете найти чуть ниже, а так же взять с собой зонтик :)",
  rain: "Обязательно возьмите с собой зантик, если не хотите промокнуть, или оставайтесь дома, пока погода ну улучшиться",
  snow: "Вы можете посетить различные места Петербурга, ведь в снежную погоду они приобретают особую красоту",
  atmosphere: "Будьте осторожны. А пока на улице бушует непогода, вы можете посмотреть новые вызовы и события в городе!",
  clear: "Советуем вам выбраться на улицу, погулять со своими друзьями или животными, посетить достопримечательности Петербурга.",
  clouds: "Советуем посетить выставки, музеи или театры, чтобы разбавить день в непогоду",
}

export function getWish(cod) {
  if (cod > 800) {
    return wishes.clouds
  } else if (cod === 800) {
    return wishes.clear
  } else if (cod >= 700) {
    return wishes.atmosphere
  } else if (cod >= 600) {
    return wishes.snow
  } else if (cod >= 500) {
    return wishes.rain
  } else if (cod >= 300) {
    return wishes.drizzle
  } else if (cod >= 200) {
    return wishes.thunderstorm
  }
}