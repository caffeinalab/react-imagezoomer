import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import ImageZoomer from '../dist/lib/index';

import './storybook.css';


const conf = {
 zoomerContainerClass: 'imagezoomer',
 zoomerClass: 'imagezoomer__inner'
}

const zoomConf = {
  zoom: 12
}

storiesOf('ImageZoomer', module)
  .add('Default', withInfo(`
  Default usage

  ~~~js
  <ImageZoomer image="https://source.unsplash.com/random" />
  ~~~

`)(() =>(
    <div style={{width: '500px', height:'500px'}}> 
      <ImageZoomer image="https://source.unsplash.com/random" />
    </div>))
  )
  .add('Custom Classes', withInfo(`
  Custom  classes usage

  ~~~js
  const conf = {
    zoomerContainerClass: 'imagezoomer',
    zoomerClass: 'imagezoomer__inner'
  }
  <ImageZoomer conf={conf} image="https://source.unsplash.com/random" />
  ~~~

`)(() => (
    <div style={{width: '500px', height:'500px'}}> 
      <ImageZoomer conf={conf} image="https://source.unsplash.com/random" />
    </div>
  )))
  .add('Custom Zoom', withInfo(`
  Custom Zoom usage

  ~~~js
  const zoomConf = {
    zoom: 12
  }
  <ImageZoomer conf={zoomConf} image="https://source.unsplash.com/random" />
  ~~~

`)(() => (
      <div style={{width: '500px', height:'500px'}}> 
        <ImageZoomer conf={zoomConf} image="https://source.unsplash.com/random" />
      </div>
  )));   