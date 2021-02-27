import useLang from './useLang.js'

const Lang = () => {
  const lang = useLang()

  const element = document.createElement('div')
  element.textContent = lang.get()
  lang.onChange(lang => element.textContent = lang)

  return element
}

export default Lang
