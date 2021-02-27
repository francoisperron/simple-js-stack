const Text = ({ text }) => {
  const element = document.createElement('div')

  element.textContent = text.get()
  text.onChange((value) => element.textContent = value)

  return element
}

export default Text
