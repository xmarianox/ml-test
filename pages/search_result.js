/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, ListView, Breadcrumb } from 'components';
import api from 'api';


const Container = styled.main`
  width: 100%;
  height: auto;
  max-width: 866px;
  margin: 0 auto;
  padding-bottom: 30px;
  
  // iPhone X support
  @supports(padding: max(0px)) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-bottom: max(30px, env(safe-area-inset-bottom));
  }
`;

export default class Items extends PureComponent {
  static async getInitialProps({ req, res, query }) {
    if (query === '' || query === undefined) res.redirect('/');
    // console.log(`request client: ${query}`);
    const result = await api.search(query);
    const path = result.filters.map(filter => filter.values.map(value => value.path_from_root));

    return {
      query,
      searchItems: result.items,
      pathFromRoot: path[0][0],
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      queryText: this.props.query,
      searchItems: this.props.searchItems,
      pathFromRoot: this.props.pathFromRoot,
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

          <Breadcrumb items={ this.state.pathFromRoot } />

          <ListView
            data={ this.state.searchItems }
            limit={ 4 }
          />

        </Container>
      </Layout>
    );
  }
}

Items.propTypes = {
  query: PropTypes.string.isRequired,
  searchItems: PropTypes.array.isRequired,
  pathFromRoot: PropTypes.array.isRequired,
};
