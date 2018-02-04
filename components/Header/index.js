import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, Container, Logo } from './styles';
import SearchBar from '../SearchBar';

export class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <Logo href="/">Mercado Libre</Logo>
          <SearchBar
            searchQuery={ this.props.query }
            changeSearch={ this.props.onChange }
            submitSearch={ this.props.onSubmit }
          />
        </Container>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
