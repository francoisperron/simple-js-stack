const Joke = () => {
  const element = document.createElement('div')
  element.textContent = 'waiting for a joke'

  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => element.textContent = data.value)

  return element
}

export default Joke
