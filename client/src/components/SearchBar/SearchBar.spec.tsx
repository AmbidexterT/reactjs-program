import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchBar from './SearchBar';

let mockopenAddMovie: jest.Mock;

beforeEach(() => {
  mockopenAddMovie = jest.fn();
});

test('renders the SearchBar component', () => {
  const { getByTestId } = render(<SearchBar defaultSearchValue={''} openAddMovie={mockopenAddMovie}/>);
  const inputElement = getByTestId('search-input') as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
});

test('displays a button to add a movie', () => {
  const { getByText } = render(<SearchBar defaultSearchValue={''} openAddMovie={mockopenAddMovie}/>);
  const addMovieButton = getByText('+ ADD MOVIE');
  expect(addMovieButton).toBeInTheDocument();
});

test('updates the search value when typing into the input field', () => {
  const { getByTestId } = render(<SearchBar defaultSearchValue={''} openAddMovie={mockopenAddMovie}/>);
  const inputElement = getByTestId('search-input') as HTMLInputElement;
  fireEvent.input(inputElement, { target: { value: 'New Value' } });
  expect(inputElement).toHaveValue('New Value');
});

test('does not call onSubmit prop when submitting the form with an empty search input', () => {
  const mockOnSubmit = jest.fn();
  render(<SearchBar onSubmit={mockOnSubmit} defaultSearchValue={''} openAddMovie={mockopenAddMovie}/>);
  const submitButton = screen.getByText('Search');
  fireEvent.click(submitButton);
  expect(mockOnSubmit).not.toHaveBeenCalled();
});
