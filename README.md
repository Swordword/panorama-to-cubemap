<p align='center'>Convert 2:1 equirectangular panorama to cube map</p>

  <a href="README-zh.md">
    <b>中文说明</b>
  </a>

## Description

Convert 2:1 equirectangular panorama to cube map by using canvas and webworker

## Installation

`npm install @littlecabbage/panorama-to-cubemap`

or use yarn

`yarn add @littlecabbage/panorama-to-cubemap`

## Usage

```js
import {panorama2Cubemap} from '@littlecabbage/panorama-to-cubemap'
import panorama from './panorama.png'
const options = {
  output: 'jpeg',
  interpolation: 'lanczos',
};
panorama2Cubemap(panorama, options).then((cubemapList) => {
  console.log('cubemapList',cubemapList)
})
```



## options config

#### interpolation:

* linear:(softer details)

* cubic: (sharper details)

* lanczos: (best but slower)

#### output : canvas output format  

* png
* jpeg



## Question

[Issues · Swordword/panorama2cubemap (github.com)](https://github.com/Swordword/panorama2cubemap/issues)

## Liscense

[MIT](LICENSE)