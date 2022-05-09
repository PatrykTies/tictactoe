import React from 'react';
import styles from '../styles/Home.module.css';

const Square = ({ value, onClick }) => {
  // TODO - MAKE X-RED AND O-GREEN COLOURS
  const style = value
    ? `${styles.squares} ${styles[value]}`
    : `${styles.squares}`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
