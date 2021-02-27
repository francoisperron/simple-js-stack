import fs from 'fs'
import bs from 'browser-sync'
import esbuild from 'esbuild'

const server = bs.create()
server.watch('src/**/*.js').on('change', () => buildJS())

const buildJS = () => {
  const options = { entryPoints: ['src/index.js'], outdir: 'build', minify: false, bundle: true, sourcemap: true }

  esbuild.build(options)
    .then(() => server.reload())
}

const buildHTML = () => {
  fs.mkdirSync('build', { recursive: true })
  fs.copyFileSync('src/index.html', 'build/index.html')
}

buildHTML()
buildJS()

server.init({ server: 'build', notify: false })
