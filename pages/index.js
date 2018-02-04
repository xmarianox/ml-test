import React, { PureComponent } from 'react';
import { Layout } from '../components';

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
    console.log(`query submited: ${this.state.queryText}`);
  }

  render() {
    return (
      <Layout
        query={ this.state.queryText }
        onChange={ this.handleChange }
        onSubmit={ this.handleSubmit }
      >
        <h1>Meli test</h1>
      </Layout>
    );
  }
}
