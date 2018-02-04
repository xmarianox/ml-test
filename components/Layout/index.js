import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LayoutWrapper } from './styles';

import { Header } from '../Header';

export default class Layout extends PureComponent {
  render() {
    return (
      <LayoutWrapper>
        <Header
          query={ this.props.query }
          onChange={ this.props.onChange }
          onSubmit={ this.props.onSubmit }
        />

        {this.props.children}
      </LayoutWrapper>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

