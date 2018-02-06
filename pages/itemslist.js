/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, ListView } from 'components';
import api from 'api';


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
    window.location.replace(`/items?search=${this.state.queryText}`);
    // api.search(this.state.queryText)
    //   .then(items => this.setState({ searchItems: items }))
    //   .catch(error => console.log(`Error: ${error}`));
  }

  render() {
    return (
      <Layout
        query={ this.state.queryText }
        onChange={ this.handleChange }
        onSubmit={ this.handleSubmit }
      >
        <Container>
          <ListView
            data={ this.state.searchItems }
            limit={ 4 }
          />
        </Container>
      </Layout>
    );
  }
}

ItemsList.propTypes = {
  query: PropTypes.string.isRequired,
  searchItems: PropTypes.array.isRequired,
};
