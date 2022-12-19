import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

function BackDroop() {
  return <div className={styles.backdroop} />;
}

function ModalOverLay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles['list-item']}>
          <div>
            <h3>Schnitzel</h3>
            <div>
              <p>$16.5</p>
              <p>x2</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <button type="button">-</button>
            <button type="button">+</button>
          </div>
        </div>
        <div className={styles.total}>
          <div>
            <h3>Total Amount:</h3>
            <p>$33.00</p>
          </div>
          <div>
            <button type="button">Close</button>
            <button type="button">Order</button>
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
