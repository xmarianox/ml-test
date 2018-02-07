/* eslint-disable no-undef,react/forbid-prop-types */
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
    const curItem = await api.getItem(id);
    const curItemDesc = await api.getItemDescription(id);

    return {
      item: curItem,
      description: curItemDesc,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      queryText: '',
      currentDescription: this.props.description,
      // pathFromRoot: this.props.pathFromRoot,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonBuy = this.handleButtonBuy.bind(this);
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
    console.log(`Comprando item: ${this.props.item.title}`);
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
              <p>big</p>
            </section>

            <section className="col-2">
              <header>
                <span>{ this.props.item.condition ? 'Nuevo' : 'Usado' } - { this.props.item.sold_quantity } vendidos</span>
                <h1>{ this.props.item.title }</h1>
              </header>

              <div>
                <span>$ { this.props.item.price }</span>

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
  description: PropTypes.object.isRequired,
};
