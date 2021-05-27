function ucFirst(str) {
  if (str === '') {
    return ('')
  }
  function toUp(text) {
    return text[0].toUpperCase() + text.slice(1)
  }
  return toUp(str)

}



