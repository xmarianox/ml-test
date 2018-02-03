import React from 'react';
import { HeaderWrapper, Container, Logo } from './styles';
import SerchBar from '../SearchBar';

export const Header = () => (
  <HeaderWrapper>
    <Container>
      <Logo href="/">Mercado Libre</Logo>
      <SerchBar />
    </Container>
  </HeaderWrapper>
);
