import React from 'react';
import Card from './Card';
import './Board.css';

const Board: React.FC = () => {
  const cards = [
    { id: '1', value: '1' },
    { id: '1', value: '1' },
    { id: '5', value: '5' },
    { id: '5', value: '5' },
    { id: '3', value: '3' },
    { id: '3', value: '3' },
    { id: '7', value: '7' },
    { id: '7', value: '7' },
    { id: '11', value: '11' },
    { id: '11', value: '11' },
    { id: '13', value: '13' },
    { id: '13', value: '13' },
  ];

  return (
    <div className="Board-container">
      <div className="Board-row">
        { cards.map((card, i) => (<Card key={i} value={card.value} />))}
      </div>
    </div>
  );
}

export default Board;
