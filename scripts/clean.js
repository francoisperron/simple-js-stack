import fs from 'fs'

const cleanBuild = () => {
  fs.rmdirSync('build', { recursive: true })
}

cleanBuild()
