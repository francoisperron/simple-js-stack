import Time from './time/Time.js'
import changeTime from './time/changeTime.js'
import Text from './text/Text.js'
import ChangeText from './text/ChangeText.js'
import Joke from './joke/Joke.js'
import Lang from './lang/Lang.js'
import ChangeLang from './lang/ChangeLang.js'
import useLang from './lang/useLang.js'

useLang('fr')

const App = ({ model }) => {
  const root = document.createElement('div')
  document.body.appendChild(root)

  root.appendChild(Time({ time: model.time }))
  changeTime({ time: model.time })

  root.appendChild(Text({ text: model.text }))
  root.appendChild(ChangeText({ text: model.text }))

  root.appendChild(Joke())

  root.appendChild(Lang())
  root.appendChild(ChangeLang())

  return root
}

export default App
