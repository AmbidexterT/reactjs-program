import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '.';

it('should render Loader component', () => {
  const elem = renderer.create(<Loader />).toJSON();
  expect(elem).toMatchSnapshot();
});
