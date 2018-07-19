import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

setOptions({
  name: 'react-imagezoomer',
  url: 'http://github.com/caffeinalab',
})


configure(loadStories, module);