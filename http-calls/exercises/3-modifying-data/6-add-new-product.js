/**
 * Complete the following function that creates a new product
 */
 async function createNewProduct(
  name,
  description,
  price,
  discountId,
  categoryId,
  outOfStock,
) {
  const path = 'products/?populate=category&populate=discount';
  const body = {
    data: {
      name: name,
      description: description,
      price: price,
      outOfStock: outOfStock,
      discount: {
        id: discountId,
      },
      category: {
        id: categoryId,
      },
    },
  };
  const url = http//localhost:1337/api/${path};
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisl enim, porttitor non arcu vel, auctor aliquet turpis. Ut nibh ex, gravida eget nisl eu, ornare molestie quam.';
createNewProduct('clue', description, 20, 3, 3, false);