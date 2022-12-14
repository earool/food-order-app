import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h2>React Meals</h2>
      <HeaderCartButton />
    </header>
  );
}

export default Header;
