/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  ListItemWrapper,
  Container,
  ItemImage,
  ItemDataContainer,
  ShippinIcon,
  ItemLocationContainer,
} from './styles';

export default class ListItem extends PureComponent {
  renderFreeShippingIcon(shipping) {
    if (!shipping) return null;
    return <ShippinIcon />;
  }

  render() {
    const item = this.props.data;

    return (
      <ListItemWrapper>
        <Container>
          <ItemImage src={ item.thumbnail } />

          <ItemDataContainer>
            <strong>{ item.price } {this.renderFreeShippingIcon(item.shipping.free_shipping)}</strong>
            <p>{ item.title }</p>
          </ItemDataContainer>

          <ItemLocationContainer>
            <p>{ item.address.state_name }</p>
          </ItemLocationContainer>
        </Container>
      </ListItemWrapper>
    );
  }
}

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

