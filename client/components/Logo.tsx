import React from 'react';
import Logo from '../public/assets/icons/logo.svg';


const AppLogo = ({ width = 150, height = 24, ...rest }: React.SVGAttributes<SVGElement>) => (// @ts-ignore
  <img src="/assets/icons/logo.svg" width={width} height={height} {...rest}  alt={''}/>
);

export default AppLogo;
