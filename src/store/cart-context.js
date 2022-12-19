import React from 'react';

const CartContext = React.createContext({
  addItem: () => {},
  modalOnHanlder: () => {},
});

export default CartContext;
