/* eslint-disable no-undef,react/forbid-prop-types,react/no-danger */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Breadcrumb, Button } from 'components';
import api from 'api';

import constants from 'constants';

const { colors, breakpoints } = constants.STYLE_VARS;

const Container = styled.main`
  width: 100%;
  height: auto;
  max-width: 866px;
  margin: 0 auto;

  // iPhone X support
  @supports(padding: max(0px)) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
  }
`;

const ItemContainer = styled.article`
  width: 100%;
  background-color: ${colors.white};
  border-radius: 4px;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  
  .col-8, .col-2 {
    width: 100%;
    padding: 16px;
  }
  
  .product-header {
    width: 100%;
    
    span {
      font-size: 14px;
      margin: 16px 0;
      display: block;
    }
    
    h1 {
      font-size: 24px;
      line-height: 30px;
      font-weight: 600;
      margin-bottom: 32px;
    }
  }
  
  .price {
    font-size: 46px;
    line-height: 50px;
    margin-bottom: 32px;
    display: block;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    max-width: 680px;
    display: block;
  }
  
  .product-description-container {
    width: 100%;
    height: auto;
    max-width: 680px;
    overflow: hidden;
    padding: 32px 0;
        
    p > p > img {
      width: 100%;
      height: auto;
      max-width: 680px;
      display: block;
    }
    
    h2 {
      font-size: 28px;
      margin-bottom: 32px;
      word-wrap: break-word;
    }
    
    p {
      width: 100%;
      font-size: 16px;
      line-height: 20px;
      color: ${colors.mediumGray};
      word-wrap: break-word;
    }
  }
  
  @media ${breakpoints.tabletPort} {
    flex-direction: row;
    
    .col-8 {
      width: 80%;
    }
    .col-2 {
      width: 20%;
    }
  }
`;

export default class ItemDetail extends PureComponent {
  static async getInitialProps({ query: { id } }) {
    const json = await api.getItem(id);
    console.log(`item: ${JSON.stringify(json)}`);
    return {
      item: json.item,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      queryText: '',
      item: this.props.item,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonBuy = this.handleButtonBuy.bind(this);
  }

  componentDidMount() {
    this.setState({ item: this.props.item });
  }

  handleChange(event) {
    this.setState({ queryText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.replace(`/items?search=${this.state.queryText}`);
  }

  handleButtonBuy(event) {
    event.preventDefault();
    console.log(`Comprando item: ${this.state.item.title}`);
  }

  render() {
    return (
      <Layout
        query={ this.state.queryText }
        onChange={ this.handleChange }
        onSubmit={ this.handleSubmit }
      >
        <Container>
          {/* <Breadcrumb items={ this.state.pathFromRoot } /> */}

          <ItemContainer>

            <section className="col-8">

              <img
                src={ this.state.item.picture }
                alt={ this.state.item.title }
                className="product-image"
              />

              <div className="product-description-container">
                <h2>Descripción del producto</h2>
                <p dangerouslySetInnerHTML={ { __html: this.state.item.description } } />
              </div>

            </section>

            <section className="col-2">
              <header className="product-header">
                <span>{ this.state.item.condition ? 'Nuevo' : 'Usado' } - { this.state.item.sold_quantity } vendidos</span>
                <h1>{ this.state.item.title }</h1>
              </header>

              <div>
                <span className="price">$ { this.state.item.price.amount }</span>

                <Button
                  label="Comprar"
                  action={ this.handleButtonBuy }
                />

              </div>
            </section>

          </ItemContainer>

        </Container>
      </Layout>
    );
  }
}

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
};
