import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GenreList from './GenreList';

test('renders all genres passed in props', () => {
  const genres = ['Action', 'Adventure', 'Comedy'];
  const { getByText } = render(<GenreList genreNames={genres} selectedGenre="" onSelect={() => {}} />);

  genres.forEach((genre) => {
    expect(getByText(genre)).toBeInTheDocument();
  });
});

test('highlights a selected genre passed in props', () => {
  const selectedGenre = 'Action';
  const { getByText } = render(<GenreList genreNames={['Action', 'Adventure', 'Comedy']}
                                          selectedGenre={selectedGenre} onSelect={() => {}} />);
  const selectedGenreElement = getByText(selectedGenre);

  expect(selectedGenreElement).toHaveClass('default-tab border-bottom primary-border primary-text');
  expect(selectedGenreElement).not.toHaveClass('white-text');
});

test('after a click event on a genre button, calls "onChange" callback with correct genre', () => {
  const mockOnSelect = jest.fn();
  const { getByText } = render(<GenreList genreNames={['Action', 'Adventure', 'Comedy']}
                                          selectedGenre="" onSelect={mockOnSelect} />);
  const genreToClick = 'Action';
  const genreElement = getByText(genreToClick);

  fireEvent.click(genreElement);

  expect(mockOnSelect).toHaveBeenCalledWith(genreToClick);
});
