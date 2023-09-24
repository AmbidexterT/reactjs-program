import React, { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

const buttonVariants = {
  primary: 'text-white bg-primary border-primary',
  'outline-primary': 'border-primary text-primary',
  secondary: 'text-primary bg-gray68 border-gray68',
};

const buttonSizes = {
  large: 'px-16 py-4',
  medium: 'px-11 py-3',
  small: 'px-4 py-2',
};

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: ButtonVariant;
  size: ButtonSize;
}

const Button = ({ title, variant, size, className = '', ...rest }: ButtonProps) => (
  <button
    className={cx(
      'flex justify-center items-center rounded border p-2',
      buttonVariants[variant],
      buttonSizes[size],
      className,
    )}
    {...rest}
  >
    {title}
  </button>
);

export default Button;
