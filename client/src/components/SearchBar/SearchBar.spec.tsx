import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchBar from './SearchBar';

test('renders an input with the value equal to initial value passed in props', () => {
  const { getByPlaceholderText } = render(<SearchBar initialQuery="Initial Value" onSearch={() => {}} />);
  const inputElement = getByPlaceholderText('What do you want to watch?');

  expect(inputElement).toHaveValue('Initial Value');
});

test('after typing into the input and clicking Submit button, onChange prop is called with the proper value', () => {
  const mockOnSearch = jest.fn();
  const { getByPlaceholderText, getByText } = render(<SearchBar initialQuery="" onSearch={mockOnSearch} />);
  const inputElement = getByPlaceholderText('What do you want to watch?');
  const submitButton = getByText('Search');

  fireEvent.change(inputElement, { target: { value: 'New Value' } });
  fireEvent.click(submitButton);

  expect(mockOnSearch).toHaveBeenCalledWith('New Value');
});

test('after typing into the input and pressing Enter key, onChange prop is called with the proper value', () => {
  const mockOnSearch = jest.fn();
  const { getByPlaceholderText } = render(<SearchBar initialQuery="" onSearch={mockOnSearch} />);
  const inputElement = getByPlaceholderText('What do you want to watch?');

  fireEvent.change(inputElement, { target: { value: 'New Value' } });
  fireEvent.submit(inputElement);

  expect(mockOnSearch).toHaveBeenCalledWith('New Value');
});
