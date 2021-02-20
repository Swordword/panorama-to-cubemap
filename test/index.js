import { panorama2Cubemap } from '../src/index'

const app = document.getElementById('app')
const imageFile = document.getElementById('imageFile')

imageFile.addEventListener('change', imageUpload)

function imageUpload() {
  const file = imageFile.files[0]
  if (!file) return
  console.log(file)
  const sourceImg = document.createElement('img')
  const imgUrl = URL.createObjectURL(file)
  console.log('imgUrl', imgUrl)
  sourceImg.src = imgUrl
  app.appendChild(sourceImg)
  sourceImg.addEventListener('load', () => {
    const options = {
      output: 'jpeg',
      interpolation: 'lanczos',
    }
    panorama2Cubemap(imgUrl, options).then((res) => {
      console.log('res', res)
      const border = document.createElement('div')
      res.forEach((blob, idx) => {
        const image = document.createElement('img')
        image.src = blob
        border.appendChild(image)
      })
      app.appendChild(border)
    })
  })
}
