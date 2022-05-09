import React from 'react';
import styles from '../styles/Home.module.css';
import Square from './Square';

const Board = ({ squares, onClick }) => (
  <div className={styles.board}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
