/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';

import Header from './Header/Header';
import MealsSummary from './MealsSummary/MealsSummary';
import CartContext from './store/cart-context';
import Modal from './Modal/Modal';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [amounts, setAmounts] = useState({
    m1: 0,
    m2: 0,
    m3: 0,
    m4: 0,
  });

  const [modalOn, setModalOn] = useState(false);

  const modalOnHanlder = () => {
    setModalOn((prev) => (prev === false));
  };

  // eslint-disable-next-line no-unused-vars
  function addItem(id, value) {
    setAmounts((prev) => {
      const newAmount = +prev[id] + +value;
      return ({
        ...prev,
        [id]: newAmount,
      });
    });
    console.log(amounts);
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        modalOnHanlder,
      }}
    >
      { modalOn && <Modal />}
      <Header />
      <MealsSummary />
    </CartContext.Provider>
  );
}

export default App;
