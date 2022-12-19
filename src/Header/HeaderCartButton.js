import React, { useContext } from 'react';

import CartContext from '../store/cart-context';
import styles from './HeaderCartButton.module.css';
import icon from './cart.svg';

function HeaderCartButton() {
  const ctx = useContext(CartContext);
  return (
    <button onClick={ctx.modalOnHanlder} type="button" className={styles.button}>
      <img src={icon} alt="cart icon" />
      <p>Your Cart</p>
      <div>0</div>
    </button>
  );
}

export default HeaderCartButton;
