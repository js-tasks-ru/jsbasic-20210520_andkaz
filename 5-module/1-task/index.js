function hideSelf() {
  const button = document.querySelector('.hide-self-button')
  button.addEventListener('click', hideBtn)

  function hideBtn() {
    return button.hidden = 'true'
  }
}
