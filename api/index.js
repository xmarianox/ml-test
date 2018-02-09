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
      // console.log(`search: ${JSON.stringify(search)}`);
      const categoriesArr = search.filters.map(filter => filter.values.map((value) => {
        if (value.hasOwnProperty('path_from_root')) {
          return value.path_from_root.map(category => category.name);
        }
        return value.name;
      }));
      // console.log(`categories: ${JSON.stringify(categoriesArr)}`);
      const categories = flatten(categoriesArr);
      // console.log(`categories: ${JSON.stringify(categories)}`);
      // populate items array
      const items = search.results.map(item => ({
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

      // console.log(`items: ${JSON.stringify(items)}`);
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
        error: `Server error: ${err}`,
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
      // console.log(`item detail: ${JSON.stringify(item)}`);
      // add item picture
      const itemPicture = item.pictures.map(picture => picture.secure_url);

      // fetch item description
      const responseDescription = await fetch(`${baseUrl}/items/${itemId}/description`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // parse description
      const descriptionJson = await responseDescription.json();
      // console.log(`item description: ${JSON.stringify(descriptionJson)}`);
      // add item description value
      const descriptionText = descriptionJson.plain_text === '' ? descriptionJson.text : descriptionJson.plain_text;
      // console.log(`item description: ${JSON.stringify(descriptionText)}`);

      return {
        author: {
          name: 'Mariano',
          lastname: 'Molina',
        },
        item: {
          id: item.id,
          category_id: item.category_id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: 0,
          },
          picture: itemPicture[0],
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
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
        error: `Server error: ${err}`,
      };
    }
  },
  getCategories: async (categoryId) => {
    try {
      // fetch item data
      const response = await fetch(`${baseUrl}/categories/${categoryId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // parse item
      const json = await response.json();


      const categories = json.path_from_root.map(category => category.name);

      return {
        author: {
          name: 'Mariano',
          lastname: 'Molina',
        },
        categories,
      };
    } catch (err) {
      return {
        author: {
          name: 'Mariano',
          lastname: 'Molina',
        },
        error: `Server error: ${err}`,
      };
    }

  }
};

