import useDispatcher from './useDispatcher.js'

const useState = (value) => {
  let property = value

  const dispatcher = useDispatcher()

  const onChange = (listener) => dispatcher.addListener(listener)
  const get = () => property
  const set = (newValue) => {
    property = newValue
    dispatcher.dispatch(newValue)
  }

  return { get, set, onChange }
}

export default useState
