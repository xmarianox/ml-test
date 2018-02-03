import React, { PureComponent } from 'react';
import { LayoutWrapper } from './styles';

import { Header } from '../Header';

export default class Layout extends PureComponent {
  render() {
    return (
      <LayoutWrapper>
        <Header />
        {this.props.children}
      </LayoutWrapper>
    );
  }
}
