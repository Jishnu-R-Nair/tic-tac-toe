import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square({ value, onClick }) {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);

  const handleClick = (i) => {
    let updatedSquares = squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    updatedSquares[i] = xNext ? 'X' : 'O';
    setSquares(updatedSquares);
    setXNext(!xNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xNext ? 'X' : 'O');
  }

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
