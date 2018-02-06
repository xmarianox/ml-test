/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';


const Bread = ({ item }) => (
  <li>
    <a href="#" title={ item.name }>{ item.name }</a>
  </li>
);

export default class Breadcrumb extends PureComponent {
  render() {
    return (
      <Wrapper>
        {this.props.items.map(item => <Bread key={ item.id } item={ item } />)}
      </Wrapper>
    );
  }
}

Breadcrumb.propTypes = {
  items: PropTypes.array.isRequired,
};

Bread.propTypes = {
  item: PropTypes.object.isRequired,
};
