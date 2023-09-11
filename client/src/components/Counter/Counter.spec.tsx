import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Counter from './Counter';

test('renders initial value provided in props', () => {
  const { getByText } = render(<Counter initialValue={5} />);
  const valueElement = getByText('Value: 5');

  expect(valueElement).toBeInTheDocument();
});

test('a click event on "decrement" button decrements the displayed value', () => {
  const { getByText } = render(<Counter initialValue={10} />);
  const decrementButton = getByText('Decrement');
  const valueElement = getByText('Value: 10');

  fireEvent.click(decrementButton);

  expect(valueElement).toHaveTextContent('Value: 9');
});

test('a click event on "increment" button increments the displayed value', () => {
  const { getByText } = render(<Counter initialValue={3} />);
  const incrementButton = getByText('Increment');
  const valueElement = getByText('Value: 3');

  fireEvent.click(incrementButton);

  expect(valueElement).toHaveTextContent('Value: 4');
});
