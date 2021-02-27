import Time from './time/Time.js'
import changeTime from './time/changeTime.js'
import Text from './text/Text.js'
import ChangeText from './text/ChangeText.js'
import Joke from './joke/Joke.js'

const App = ({ model }) => {
  const root = document.createElement('div')
  document.body.appendChild(root)

  root.appendChild(Time({ time: model.time }))
  changeTime({ time: model.time })

  root.appendChild(Text({ text: model.text }))
  root.appendChild(ChangeText({ text: model.text }))

  root.appendChild(Joke())

  return root
}

export default App
