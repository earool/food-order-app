import React from 'react';

import styles from './HeaderCartButton.module.css';
import icon from './cart.svg';

function HeaderCartButton() {
  return (
    <div className={styles.button}>
      <img src={icon} alt="cart icon" />
      <p>Your Cart</p>
      <div>0</div>

    </div>
  );
}

export default HeaderCartButton;
