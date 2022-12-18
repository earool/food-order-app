/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';

import Header from './Header/Header';
import MealsSummary from './MealsSummary/MealsSummary';
import CartContext from './store/cart-context';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [amounts, setAmounts] = useState({
    m1: 0,
    m2: 0,
    m3: 0,
    m4: 0,
  });

  // eslint-disable-next-line no-unused-vars
  function addItem(id, value) {
    console.log(amounts);
    setAmounts((prev) => {
      const newAmount = +prev[id] + +value;
      console.log(`${id}: ${value}`);
      return ({
        ...prev,
        [id]: newAmount,
      });
    });
  }

  return (
    <CartContext.Provider
      value={{
        m1: amounts.m1,
        m2: amounts.m2,
        m3: amounts.m3,
        m4: amounts.m4,
        addItem,
      }}
    >
      <Header />
      <MealsSummary />
    </CartContext.Provider>
  );
}

export default App;
