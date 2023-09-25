import React from 'react';
import renderer from 'react-test-renderer';
import MovieForm from './MovieForm';
import { fakeMovieData } from '../../mocks/data';

describe('Movie form', () => {
  const onSubmit = jest.fn();
  const onReset = jest.fn();

  it('should render movie form w/o data with loading button', () => {
    const elem = renderer.create(<MovieForm onSubmit={onSubmit} onReset={onReset} />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should render movie form with filled data', () => {
    const elem = renderer.create(<MovieForm movie={fakeMovieData[0]} onSubmit={onSubmit} onReset={onReset} />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
