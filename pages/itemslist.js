/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Layout, ListView } from 'components';
import api from 'api';



export default class ItemsList extends PureComponent {
  static async getInitialProps({ req, res, query }) {
    if (query === '' || query === undefined) res.redirect('/');
    // console.log(`request client: ${query}`);
    const items = await api.search(query);
    // console.log(`items: ${items}`);

    return {
      query,
      searchItems: items,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      queryText: this.props.query,
      searchItems: this.props.searchItems,
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

        <ListView
          data={ this.state.searchItems }
          limit={ 4 }
        />

      </Layout>
    );
  }
}

ItemsList.propTypes = {
  query: PropTypes.string.isRequired,
  searchItems: PropTypes.array.isRequired,
};
