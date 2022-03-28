/**
 * Fill in the blanks to create a script 
 * that prints the name of the most expensive item that someone can buy (after applying any discounts,
 * and not including any items that are out of stock)
 */

import './qs.js';
async function ex6() {
  const query = qs.stringify(
    {
      populate: ['discount'],
      fields: ['name', 'price', 'outOfStock'],
    },
    {
      encodeValuesOnly: true,
    },
  );
  console.log('The query string', query);

   // call the matching endpoint and include the querystring after the ?
  const baseUrl = 'http://localhost:1337/api/products';
  const response = await fetch(${baseUrl}?${query});
  const result = await response.json();
  let prices = [];
  for (let i = 0; i < result.data.length; i++) {
    if (result.data[i].attributes.outOfStock === false) {
      let price = result.data[i].attributes.price;
      if (result.data[i].attributes.discount.data !== null) {
      const discount =
          result.data[i].attributes.discount.data.attributes.percentage;
         price = Math.floor(price * ((100 - discount) / 100));
      }
      prices.push(price);
    } else {
      prices.push(0);
    }
  }
  const mostExpensive = Math.max(...prices);
  const item = prices.indexOf(mostExpensive);
  const name = result.data[item].attributes.name;
  console.log(name);
  return name;
}

