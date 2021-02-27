import useLang from './useLang.js'

const ChangeLang = () => {
  const lang = useLang()

  const element = document.createElement('input')
  element.setAttribute('type', 'checkbox')
  element.setAttribute('data-testid', 'lang')

  element.addEventListener('change', (e) => lang.set(e.target.checked ? 'en' : 'fr'))

  return element
}

export default ChangeLang
