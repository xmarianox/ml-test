/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import { Layout } from 'components';
import styled from 'styled-components';

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


export default class Main extends PureComponent {
  constructor() {
    super();

    this.state = {
      queryText: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ queryText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.queryText !== '') {
      window.location.replace(`/items?search=${this.state.queryText}`);
    }
  }

  render() {
    return (
      <Layout
        query={ this.state.queryText }
        onChange={ this.handleChange }
        onSubmit={ this.handleSubmit }
      >
        <Container />
      </Layout>
    );
  }
}
