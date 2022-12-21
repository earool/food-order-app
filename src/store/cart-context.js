import React from 'react';

const CartContext = React.createContext({
  addItem: () => {},
  modalOnHanlder: () => {},
  amounts: {},
});

export default CartContext;
