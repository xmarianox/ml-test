import React, { PureComponent } from 'react';
import { SearchWrapper, Input, SearchButton } from './styles';

export default class SerchBar extends PureComponent {
  render() {
    return (
      <SearchWrapper>
        <Input type="text" name="search" placeholder="Nunca dejes de buscar" />

        <SearchButton />
      </SearchWrapper>
    );
  }
}
