function declension(number, words) {
  let str = String(number) + ' '

  if (number % 10 == 1 && number % 100 != 11) {
    str += words[0];
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
    str += words[1];
  } else {
    str += words[2];
  }
  return str;
}

export function declensionDays(number) {
  return declension(number, ["день", "дня", "дней"])
}

export function declensionPoints(number) {
  return declension(number, ["балл", "балла", "баллов"])
}