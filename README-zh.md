<p align='center'>将2:1等角全景图转换为立方体地图。</p>

  <a href="README.md">
    <b>英文说明</b>
  </a>

## 描述

通过 canvas 和 webworker 将2:1等角全景图转换为立方体地图。

## 安装

`npm install @littlecabbage/panorama-to-cubemap`

或者使用 yarn

`yarn add @littlecabbage/panorama-to-cubemap`

## 使用

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



## options配置项

#### interpolation:

* linear: 粗略的细节

* cubic: 更加清晰的细节

* lanczos: 最清晰，速度最慢

#### output: canvas输出的格式

* png
* jpeg

## 疑问

[Issues · Swordword/panorama2cubemap (github.com)](https://github.com/Swordword/panorama2cubemap/issues)

## Liscense

[MIT](LICENSE)