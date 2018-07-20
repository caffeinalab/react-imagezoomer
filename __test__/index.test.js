const React = require('react');
const renderer = require('react-test-renderer');

const ImageZoomer = require('../src/index');

it('renders correctly', () => {
  const tree = renderer
    .create(<ImageZoomer image="https://source.unsplash.com/random" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});