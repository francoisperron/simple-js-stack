const changeTime = ({ time }) => {
  const tick = () => time.set(new Date())
  setInterval(() => tick(), 1000)
}

export default changeTime
