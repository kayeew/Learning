import React from 'react';

export default React.createContext({
  products: [
    { id: 'p1', title: 'Product 1', price: 0.01 },
    { id: 'p2', title: 'Product 2', price: 100 },
    { id: 'p3', title: 'Product 3', price: 10 },
    { id: 'p4', title: 'Product 4', price: 1234 }
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
