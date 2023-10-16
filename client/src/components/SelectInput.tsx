import React, { HTMLAttributes } from 'react';
import ArrowDown from 'assets/icons/arrowDown.svg';

interface SelectInputProps extends HTMLAttributes<HTMLDivElement> {
  options: string[];
  label?: string;
}

function SelectInput ({ options, label, className }: SelectInputProps) {
  return (
    <div className={className}>
      {label && <label className="block uppercase tracking-wide text-primary text-xs font-bold mb-2">{label}</label>}
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray80 border border-gray80 text-white h-12 py-2 px-4 pr-8
          rounded leading-tight focus:outline-none focus:border-gray-200"
        >
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ArrowDown className="fill-current h-3 w-3" />
        </div>
      </div>
    </div>
  );
}

export default SelectInput;
