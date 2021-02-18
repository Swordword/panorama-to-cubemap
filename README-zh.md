<p align='center'>将全景图转换为六视图</p>
  <a href="README.md">
    <b>英文说明</b>
  </a>

## 描述



## 安装

`npm install @littlecabbage/panorama-to-cubemap`

或者使用 yarn

`yarn add @littlecabbage/panorama-to-cubemap`

## 使用

```js
import panorama from './panorama.png'
const options = {
  output: 'jpeg',
  interpolation: 'lanczos',
};
panorama2Cubemap(panorama, options).then((cubemapList) => {
  
})
```



## API配置项



## 疑问



## Liscense

