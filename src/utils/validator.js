export function specialCharactersValidator(str) {
  return /[^а-яА-ЯёЁa-zA-Z0-9]+/g.test(str)
}