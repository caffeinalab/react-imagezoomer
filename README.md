🔍 React Imagezoomer 🔎
===


**React Imagezoomer** is an `zoomer` component for [React.js](https://facebook.github.io/react/).

With **React Imagezoomer** you can specify an image and zoom it using your mouse or your finger.

Getting started
---

1. To include the code locally install `react-imagezoomer` using npm:

  ```
  npm install react-imagezoomer --save
  ```

2. To include the code globally from a cdn:
  ```html
  <script src="https://unpkg.com/react-imagezoomer/umd/index.min.js"></script>
  ```

Dependencies
---
`react-imagezoomer` has no external dependencies, aside for the usual `react` and `prop-types`.


Documentation
---
Include `react-imagezoomer` in your component:

```js
// using an ES6 transpiler, like babel
import ImageZoomer from 'react-imagezoomer'

// otherwise
let ImageZoomer = require('react-imagezoomer')
```

and set a source image to zoom

```js
const myComponent = () => <ImageZoomer image="https://source.unsplash.com/random">
```

you can also pass your personal classes to change the default style of the package

```js
const conf = {
 zommerContainerClass: 'imagezoomer',
 zommerClass: 'imagezoomer__inner'
}
const myComponent = () => <ImageZoomer conf={conf} image="https://source.unsplash.com/random">
```