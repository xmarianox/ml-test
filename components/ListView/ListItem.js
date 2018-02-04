/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ListItemWrapper } from './styles';

export default class ListItem extends PureComponent {
  render() {
    const item = this.props.data;

    return (
      <ListItemWrapper>
        <h2>{ item.title }</h2>
      </ListItemWrapper>
    );
  }
}

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

