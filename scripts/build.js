import fs from 'fs'
import esbuild from 'esbuild'

const buildJS = () => {
  const options = { entryPoints: ['src/index.js'], outdir: 'build', minify: true, bundle: true, sourcemap: true }

  return esbuild.build(options)
}

const buildHTML = () => {
  fs.mkdirSync('build', { recursive: true })
  fs.copyFileSync('src/index.html', 'build/index.html')
}

buildHTML()
buildJS()
