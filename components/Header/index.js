import React from 'react';
import { HeaderWrapper, Logo } from './styles';
import Link from 'next/link';


export const Header = () => (
  <HeaderWrapper>
    <Link href="/">
      <Logo />
    </Link>

  </HeaderWrapper>
);
