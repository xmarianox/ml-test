/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  ListItemWrapper,
  Container,
  ItemImage,
  ItemInfoContainer,
  ItemDataContainer,
  ShippinIcon,
  ItemLocationContainer,
} from './styles';

export default class ListItem extends PureComponent {
  render() {
    const item = this.props.data;

    return (
      <ListItemWrapper>
        <Container>
          <ItemImage>
            <a href={ `/items/${item.id}` } title={ item.title }>
              <img
                src={ item.picture }
                alt={ item.title }
              />
            </a>
          </ItemImage>

          <ItemInfoContainer>
            <ItemDataContainer>
              <strong>$ { item.price.amount } { item.free_shipping && <ShippinIcon /> }</strong>
              <p><a href={ `/items/${item.id}` } title={ item.title }>{ item.title }</a></p>
            </ItemDataContainer>

            <ItemLocationContainer>
              <p>{ item.state_name }</p>
            </ItemLocationContainer>
          </ItemInfoContainer>
        </Container>
      </ListItemWrapper>
    );
  }
}

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

