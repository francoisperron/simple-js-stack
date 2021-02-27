import useState from './support/useState.js'

const useModel = () => ({
  time: useState(new Date()),
  text: useState('Hello world')
})

export default useModel
