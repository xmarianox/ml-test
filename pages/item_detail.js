/* eslint-disable no-undef,react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Breadcrumb } from 'components';
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
      currentItem: this.props.item,
      currentDescription: this.props.description,
      // pathFromRoot: this.props.pathFromRoot,
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


        </Container>
      </Layout>
    );
  }
}

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
};
