import React from 'react';
import { HeaderWrapper, Logo } from './styles';
import SerchBar from '../SearchBar';

export const Header = () => (
  <HeaderWrapper>
    <Logo href="/">Mercado Libre</Logo>
    <SerchBar />
  </HeaderWrapper>
);
