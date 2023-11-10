import React from 'react';
import renderer from 'react-test-renderer';
import MovieForm from './MovieForm';
import { Movie } from '../../types/film.model';

const mockMovie = {
  id: 1,
  poster_path: 'movie.jpg',
  title: 'Sample Movie',
  genres: ['Action'],
  release_date: '2023',
  runtime: 150,
  vote_average: 8.5,
  overview: 'A sample movie description',
} as Movie;

describe('Movie form', () => {
  const onSubmit = jest.fn();
  const onReset = jest.fn();

  it('should render movie form w/o data with loading button', () => {
    const elem = renderer.create(<MovieForm onSubmit={onSubmit} onReset={onReset} />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should render movie form with filled data', () => {
    const elem = renderer.create(<MovieForm movie={mockMovie} onSubmit={onSubmit} onReset={onReset} />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
