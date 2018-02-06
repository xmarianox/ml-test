import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SearchWrapper, Input, SearchButton } from './styles';

export default class SearchBar extends PureComponent {
  render() {
    return (
      <SearchWrapper>
        <Input
          type="text"
          name="search"
          value={ this.props.searchQuery }
          onChange={ this.props.changeSearch }
          placeholder="Nunca dejes de buscar"
        />

        <SearchButton
          onClick={ this.props.submitSearch }
        />
      </SearchWrapper>
    );
  }
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  changeSearch: PropTypes.func.isRequired,
  submitSearch: PropTypes.func.isRequired,
};
