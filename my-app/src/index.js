import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square({ value, onClick }) {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    let updatedSquares = [].concat(squares);
    updatedSquares[i] = 'X';
    setSquares(updatedSquares);
  };

  const status = 'Next player: X';

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {squares.slice(0, 3).map((value, i) => (
          <Square key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </div>
      <div className='board-row'>
        {squares.slice(3, 6).map((value, i) => (
          <Square key={i} value={value} onClick={() => handleClick(i + 3)} />
        ))}
      </div>
      <div className='board-row'>
        {squares.slice(6, 9).map((value, i) => (
          <Square key={i} value={value} onClick={() => handleClick(i + 6)} />
        ))}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
