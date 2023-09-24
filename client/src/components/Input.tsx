import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  type?: React.HTMLInputTypeAttribute;
  min?: string;
  max?: string;
  step?: string;
}

const inputClassName =
  'appearance-none block w-full bg-gray80 text-white border rounded py-2 h-12 px-4 mb-3 leading-tight' +
  ' focus:outline-none focus:border-gray-200';
const labelClassName = 'block tracking-wide text-xs font-bold mb-2 upper-case';

const Input = ({ label, placeholder, errorMessage, className, type, ...rest }: InputProps) => (
  <div className={className}>
    <label className={cx(labelClassName, errorMessage ? 'text-red-500' : 'text-primary')}>{label}</label>
    <input
      className={cx(inputClassName, errorMessage ? 'border-red-500' : 'border-gray80')}
      placeholder={placeholder}
      type={type}
      {...rest}
    />
    {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
  </div>
);

export default Input;
