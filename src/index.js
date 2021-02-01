function panorama2Cubemap(imgPath,options) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    const imageList = []

    const workers = []

    const img = new Image()

    img.crossOrigin = 'anonymous'

    img.src = imgPath
    
    img.onload = () => {
      const { width, height } = img
      canvas.width = width
      canvas.height = height
      ctx.drawImage(img, 0, 0)
      const data = ctx.getImageData(0, 0, width, height)
      processImage(data)
    }

    /**
     * 朝前的（posz）、朝后的（negz）、朝上的（posy）、朝下的（negy）、朝右的（posx）和朝左的（negx）
     */
    const facePositions = {
      pz: { x: 1, y: 1 },
      nz: { x: 3, y: 1 },
      px: { x: 2, y: 1 },
      nx: { x: 0, y: 1 },
      py: { x: 1, y: 0 },
      ny: { x: 1, y: 2 },
    }
    const processImage = function (data) {
      console.log('data', data)
      for (let [faceName, position] of Object.entries(facePositions)) {
        console.log('faceName', faceName)
        console.log('position', position)
        renderFace(data, faceName, position)
      }
    }

    const renderFace = function (data, faceName, position) {
      const options = {
        data,
        face: faceName,
        rotation: Math.PI,
        interpolation: 'linear',
      }
      console.log('options', options)
      const worker = new Worker(new URL('worker.js', import.meta.url))
      worker.postMessage(options)
      worker.onmessage = setPreview
      workers.push(worker)
    }

    const setPreview = (data) => {
      console.log('setPreview', data)
      imageList.push(data.data)
      if (imageList.length === 6) {
        renderImageList()
      }
    }
    const renderImageList = async () => {
      const imgUrlList = []
      console.log('fn renderImageList')
      console.log('imageList', imageList)
      for (const imageData of imageList) {
        const url = await getDataURL(imageData, 'png')
        imgUrlList.push(url)
      }
      console.log('imgUrlList', imgUrlList)
      resolve(imgUrlList)
    }
    const mimeType = {
      jpeg: 'image/jpeg',
      jpg: 'image/jpeg',
      png: 'image/png',
    }
    const getDataURL = (imgData, extension) => {
      canvas.width = imgData.width
      canvas.height = imgData.height
      ctx.putImageData(imgData, 0, 0)
      return new Promise((resolve) => {
        canvas.toBlob(
          (blob) => resolve(URL.createObjectURL(blob)),
          mimeType[extension],
          0.62
        )
      })
    }
  })
}
export { panorama2Cubemap }
