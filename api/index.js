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
        author: {
          name: 'Mariano',
          lastname: 'Molina',
        },
        categories: [],
        items: [],
      };
      // return {
      //   items: responseJson.results,
      //   filters: responseJson.filters,
      // };
    } catch (err) {
      return { error: err };
    }
  },
  getItem: async (itemId) => {
    try {
      // fetch item data
      const responseItem = await fetch(`${baseUrl}/items/${itemId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // parse item
      const item = await responseItem.json();

      // add item picture
      let itemPiture = '';
      for (let i = 0; i < item.pictures.length; i++) {
        if (i === 0) {
          itemPiture = item.pictures[i].secure_url;
        }
      }

      // add item free shipping value
      let itemFreeShipping = '';
      for (let j = 0; j < item.shipping.free_methods.length; j++) {
        if (j === 0) {
          itemFreeShipping = item.shipping.free_methods[j].rule.free_shipping_flag;
        }
      }

      // fetch item description
      const responseDescription = await fetch(`${baseUrl}/items/${itemId}/description`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // parse description
      const descriptionJson = await responseDescription.json();
      // add item description value
      const descriptionText = descriptionJson.plain_text === '' ? descriptionJson.text : descriptionJson.plain_text;

      return {
        author: {
          name: 'Mariano',
          lastname: 'Molina',
        },
        item: {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: null,
          },
          picture: itemPiture,
          condition: item.condition,
          free_shipping: itemFreeShipping,
          sold_quantity: item.sold_quantity,
          description: descriptionText,
        },
      };
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

