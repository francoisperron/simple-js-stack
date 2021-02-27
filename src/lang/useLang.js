import useState from '../support/useState.js'

const useLang = (value) => {
  if (value) {
    globalThis.lang = useState(value)
  }
  return globalThis.lang
}

export default useLang
