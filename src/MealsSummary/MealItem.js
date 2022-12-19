/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import CartContext from '../store/cart-context';

import styles from './MealItem.module.css';

function MealItem(props) {
  const ctx = useContext(CartContext);
  const amountHandler = (event) => {
    event.preventDefault();
    const input = event.target.querySelector('input');
    const inputValue = input.value;
    const inputId = input.id;
    ctx.addItem(inputId, inputValue);
    input.value = '0';
  };
  return (
    <li className={styles['item-container']}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <p>
          {props.price}
          $
        </p>
      </div>
      <form onSubmit={amountHandler}>
        <div>
          <label htmlFor={props.id}>Amount:</label>
          <input placeholder="0" step="1" min="0" type="number" id={props.id} />
        </div>
        <button type="submit">+Add</button>
      </form>
    </li>
  );
}

export default MealItem;
