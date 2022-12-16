import React from 'react';

import MealItem from './MealItem';
import styles from './MealsSummary.module.css';

import DUMMY_MEALS from '../dummyMeals';

function MealsSummary() {
  const listItems = DUMMY_MEALS.map(() => <MealItem />);

  return (
    <div className={`${styles['summary-container']}`}>
      <div className={`${styles['round-border']} ${styles['upper-container']}`}>
        <h3>
          Delicious Food!
          {' '}
          <p>Delievered to You!</p>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </div>
      <div className={`${styles['round-border']} ${styles['lower-container']}`}>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}

export default MealsSummary;
