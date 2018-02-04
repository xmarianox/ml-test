/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { ListWrapper } from './styles';

export default class ListView extends PureComponent {
  render() {
    return (
      <ListWrapper>
        {this.props.data.map(item => <ListItem key={ item.id } data={ item } />)}
      </ListWrapper>
    );
  }
}

ListView.propTypes = {
  data: PropTypes.array.isRequired,
};
