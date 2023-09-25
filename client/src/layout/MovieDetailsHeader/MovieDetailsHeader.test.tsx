import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieDetailsHeader from './MovieDetailsHeader';
import Movie from '../../types/Movie';

const mockMovie = {
  imageSource: 'movie.jpg',
  title: 'Sample Movie',
  genre: 'Action',
  years: 2023,
  description: 'A sample movie description',
  rating: 8.5,
  duration: 150,
} as Movie;

describe('MovieDetailsHeader', () => {
  let mockOnSearchClick: jest.Mock;
  beforeEach(() => {
    window.scrollTo = jest.fn();
    mockOnSearchClick = jest.fn();
  })

  it('renders the component with movie details', () => {
    const { getByText, getByAltText } = render(
      <MovieDetailsHeader onSearchClick={mockOnSearchClick} movie={mockMovie} />
    );

    expect(getByText('Sample Movie')).toBeInTheDocument();
    expect(getByText('Action')).toBeInTheDocument();
    expect(getByText('2023')).toBeInTheDocument();
    expect(getByText('3h 30min')).toBeInTheDocument();
    expect(getByText('A sample movie description')).toBeInTheDocument();
    expect(getByText('8.5')).toBeInTheDocument();

    expect(getByAltText('Sample Movie')).toBeInTheDocument();
  });

  it('calls the onSearchClick function when the search button is clicked', () => {
    const { getByTestId } = render(
      <MovieDetailsHeader onSearchClick={mockOnSearchClick} movie={mockMovie} />
    );

    fireEvent.click(getByTestId('search-button'));

    expect(mockOnSearchClick).toHaveBeenCalled();
  });
});
