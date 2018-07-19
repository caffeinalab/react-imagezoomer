import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ImageZoomer from '../src';

storiesOf('ImageZoomer', module)
  .add('default', () => (
    <div style={{width: '500px', height:'500px'}}> 
     <ImageZoomer image="https://source.unsplash.com/random" />
    </div>
  ));   