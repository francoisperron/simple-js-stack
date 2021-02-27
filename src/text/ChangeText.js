const ChangeText = ({ text }) => {
  const element = document.createElement('input')
  element.setAttribute('placeholder', 'type something')

  element.addEventListener('keydown', ({ key }) => {
    if (key === 'Enter') {
      text.set(element.value)
      element.value = ''
    }
  })

  return element
}

export default ChangeText
