import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders the button with the provided title', () => {
    const { getByText } = render(
      <Button title="Click me" variant="primary" size="medium" buttonTitle={''}/>
    );

    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('applies the specified variant and size classes', () => {
    const { container } = render(
      <Button title="Primary Large" variant="primary" size="large" buttonTitle={''}/>
    );

    const buttonElement = container.firstChild as HTMLElement;

    expect(buttonElement).toHaveClass('text-white bg-primary border-primary');
    expect(buttonElement).toHaveClass('px-16 py-4');
  });

  it('adds custom classes from className prop', () => {
    const { container } = render(
      <Button title="Custom Class" variant="secondary" size="small" className="custom-class" buttonTitle={''}/>
    );

    const buttonElement = container.firstChild as HTMLElement;

    expect(buttonElement).toHaveClass('custom-class');
  });

  it('calls the provided onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button title="Click me" variant="primary" size="medium" onClick={onClickMock} buttonTitle={''}/>
    );

    const buttonElement = getByText('Click me');

    buttonElement.click();

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
