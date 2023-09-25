import React, { HTMLAttributes } from 'react';

interface LandingProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Landing = ({ children, className = '', ...restProps }: LandingProps) => (
  <div
    className={`flex bg-landing bg-cover bg-center bg-no-repeat justify-center h-screen text-white p-4 ${className}`}
    {...restProps}
  >
    {children}
  </div>
);

export default Landing;
