import React, { useContext, useEffect, useRef } from 'react';

import CartContext from '../store/cart-context';
import styles from './HeaderCartButton.module.css';
import icon from './cart.svg';

function HeaderCartButton() {
  const ctx = useContext(CartContext);
  const showSum = useRef();
  useEffect(() => {
    const sum = Object.values(ctx.amounts).reduce((a, b) => a + b);
    showSum.current.innerText = `${sum}`;
  }, [ctx.amounts]);
  return (
    <button onClick={ctx.modalOnHanlder} type="button" className={styles.button}>
      <img src={icon} alt="cart icon" />
      <p>Your Cart</p>
      <div ref={showSum}>0</div>
    </button>
  );
}

export default HeaderCartButton;
