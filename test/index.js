// import { panorama2Cubemap } from '@littlecabbage/panorama-to-cubemap'
import { panorama2Cubemap } from '../src/index'

import panorama from './panorama.png'

const app = document.getElementById('app')

const sourceImg = document.createElement('img')

sourceImg.src = panorama
app.appendChild(sourceImg)

panorama2Cubemap(panorama).then((res) => {
  console.log('res', res)
  const border = document.createElement('div')
  res.forEach((blob, idx) => {
    const image = document.createElement('img')
    image.src = blob
    border.appendChild(image)
  })
  app.appendChild(border)
})
