/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import CartContext from '../store/cart-context';
import DUMMY_MEALS from '../dummyMeals';
import styles from './Modal.module.css';

function BackDroop() {
  return <div className={styles.backdroop} />;
}

function ModalOverLay() {
  const ctx = useContext(CartContext);
  // eslint-disable-next-line no-unused-vars
  const calcTotal = () => {
    let total = 0;
    DUMMY_MEALS.forEach((item) => {
      total += item.price * ctx.amounts[item.id];
    });
    return total.toFixed(2);
  };

  const orderHandler = () => {
    const sum = calcTotal();
    if (sum === '0.00') {
      return;
    }
    // eslint-disable-next-line no-alert
    alert(`Pay $${sum}!`);
  };

  const listOfItems = Object.entries(ctx.amounts).map((item) => {
    if (item[1] !== 0) {
      const [id, amount] = item;
      const [properties] = DUMMY_MEALS.filter((meal) => id === meal.id);
      const { name, price } = properties;

      return (
        <div key={id} className={styles['list-item']}>
          <div>
            <h3>{name}</h3>
            <div>
              <p>${price}</p>
              <p>x{amount}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => ctx.addItem(id, -1)} type="button">-</button>
            <button onClick={() => ctx.addItem(id, 1)} type="button">+</button>
          </div>
        </div>
      );
    }
    return null;
  });
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {listOfItems}
        <div className={styles.total}>
          <div>
            <h3>Total Amount:</h3>
            <p>${calcTotal()}</p>
          </div>
          <div>
            <button onClick={ctx.modalOnHanlder} type="button">Close</button>
            <button onClick={orderHandler} type="button">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDroop />,
        document.getElementById('backdroop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverLay />,
        document.getElementById('overlay-root'),
      )}
    </>
  );
}

export default Modal;
