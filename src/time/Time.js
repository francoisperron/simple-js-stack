const Time = ({ time }) => {
  const element = document.createElement('div')

  element.textContent = time.get().toLocaleTimeString()
  time.onChange((value) => element.textContent = value.toLocaleTimeString())

  return element
}

export default Time
