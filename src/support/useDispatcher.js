const useDispatcher = () => {
  let listeners = []

  const addListener = (listener) => listeners = [...listeners, listener]
  const fire = (value) => listeners.forEach(listener => listener(value))

  return { addListener: addListener, dispatch: fire }
}

export default useDispatcher
