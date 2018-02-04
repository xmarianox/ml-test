/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import { Layout } from 'components';

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
        <h1>Home</h1>
      </Layout>
    );
  }
}
