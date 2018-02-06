const constants = require('constants');
const fetch = require('isomorphic-fetch');

const baseUrl = constants.CONFIG.api_url;

module.exports = {
  search: async (query) => {
    try {
      const response = await fetch(`${baseUrl}/sites/MLA/search?q=${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseJson = await response.json();
      return {
        items: responseJson.results,
        filters: responseJson.filters,
      };
    } catch (err) {
      return { error: err };
    }
  },
  getItem: async (itemId) => {
    try {
      const response = await fetch(`${baseUrl}/items/${itemId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (err) {
      return { error: err };
    }
  },
  getItemDescription: async (itemId) => {
    try {
      const response = await fetch(`${baseUrl}/items/${itemId}/description`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await response.json();
    } catch (err) {
      return { error: err };
    }
  },
};

