import React, { PureComponent } from 'react';
import { LayoutWrapper } from './styles';

export default class Layout extends PureComponent {
  render() {
    return (
        <LayoutWrapper>
            {this.props.children}
        </LayoutWrapper>
    );
  }
}
