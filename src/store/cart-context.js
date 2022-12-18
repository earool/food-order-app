import React from 'react';

const CartContext = React.createContext({
  m1: 0,
  m2: 0,
  m3: 0,
  m4: 0,
  addItem: () => {},
});

export default CartContext;
