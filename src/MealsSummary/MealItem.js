/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import styles from './MealItem.module.css';

function MealItem(props) {
  return (
    <li className={styles['item-container']}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <p>{props.price}</p>
      </div>
      <form type="submit">
        <div>
          <label htmlFor={props.id}>Amount:</label>
          <input value="0" type="number" id={props.id} />
        </div>
        <button type="button">+Add</button>
      </form>
    </li>
  );
}

export default MealItem;
