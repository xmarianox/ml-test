const constants = require('constants');
const fetch = require('isomorphic-fetch');

const baseUrl = constants.CONFIG.api_url;

// flatter helper
const flatten = arr => arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);


module.exports = {
  search: async (query) => {
    try {
      const response = await fetch(`${baseUrl}/sites/MLA/search?q=${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const search = await response.json();
      console.log(`search: ${JSON.stringify(search)}`);

      const categoriesArr = await search.filters.map(filter => filter.values.map(value => value.path_from_root.map(category => category.name)));
      const categories = flatten(categoriesArr);
      console.log(`categories: ${JSON.stringify(categories)}`);

      // populate items array
      const items = await search.results.map(item => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 0,
        },
        picture: item.thumbnail,
        condition: item.condition,
        state_name: item.address.state_name,
        free_shipping: item.shipping.free_shipping,
      }));

      console.log(`items: ${JSON.stringify(items)}`);

      return {
        author: {
          name: 'Mariano',
          lastname: 'Molina',
        },
        categories,
        items,
      };
    } catch (err) {
      return {
        author: {
          name: 'Mariano',
          lastname: 'Molina',
        },
        error: err,
      };
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
      let itemPicture = '';
      for (let i = 0; i < item.pictures.length; i++) {
        if (i === 0) {
          itemPicture = item.pictures[i].secure_url;
        }
      }
      // const itemPicture = item.pictures.map(picture => picture.secure_url);

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
            decimals: 0,
          },
          picture: itemPicture,
          condition: item.condition,
          free_shipping: itemFreeShipping,
          sold_quantity: item.sold_quantity,
          description: descriptionText,
        },
      };
    } catch (err) {
      return {
        author: {
          name: 'Mariano',
          lastname: 'Molina',
        },
        error: err,
      };
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

