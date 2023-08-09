import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  // функции которые будут помогать обновлять этот контекст
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
