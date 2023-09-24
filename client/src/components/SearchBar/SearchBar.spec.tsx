import React from 'react';
import { render, fireEvent, RenderResult, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchBar from './SearchBar';

let inputElement: HTMLInputElement;
let mockOnSearch: jest.Mock<void, [string]>;

beforeEach(() => {
  mockOnSearch = jest.fn();
  const { getByTestId } = render(<SearchBar />);
  inputElement = getByTestId('search-input') as HTMLInputElement;
});

test('renders an input with the value equal to initial value passed in props', () => {
  expect(inputElement).toHaveValue('Initial Value');
});

test('after typing into the input and clicking Submit button, onChange prop is called with the proper value', () => {
  const submitButton = screen.getByText('Search') as HTMLButtonElement;

  fireEvent.change(inputElement, { target: { value: 'New Value' } });
  fireEvent.click(submitButton);

  expect(mockOnSearch).toHaveBeenCalledWith('New Value');
});

test('after typing into the input and pressing Enter key, onChange prop is called with the proper value', () => {
  fireEvent.change(inputElement, { target: { value: 'New Value' } });
  fireEvent.submit(inputElement);

  expect(mockOnSearch).toHaveBeenCalledWith('New Value');
});
