import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square() {
  return <button className='square'>{/* TODO */}</button>;
}

function Board() {
  const status = 'Next player: X';

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {[0, 1, 2].map((i) => (
          <Square />
        ))}
      </div>
      <div className='board-row'>
        {[3, 4, 5].map((i) => (
          <Square />
        ))}
      </div>
      <div className='board-row'>
        {[6, 7, 8].map((i) => (
          <Square />
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
