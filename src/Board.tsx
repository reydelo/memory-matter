import React from 'react';
import Card from './Card';
import './Board.css';

const Board: React.FC = () => {
  const cards = [
    { id: '1', value: 'deer', image: '/images/card-deer.png' },
    { id: '2', value: 'bear', image: '/images/card-bear.png' },
    { id: '3', value: 'buffalo', image: '/images/card-buffalo.png' },
    { id: '4', value: 'elk', image: '/images/card-elk.png' },
    { id: '5', value: 'fox', image: '/images/card-fox.png' },
    { id: '6', value: 'horse', image: '/images/card-horse.png' },
    { id: '7', value: 'wolf', image: '/images/card-wolf.png' },
    { id: '8', value: 'deer', image: '/images/card-deer.png' },
    { id: '9', value: 'bear', image: '/images/card-bear.png' },
    { id: '10', value: 'buffalo', image: '/images/card-buffalo.png' },
    { id: '11', value: 'elk', image: '/images/card-elk.png' },
    { id: '12', value: 'fox', image: '/images/card-fox.png' },
    { id: '13', value: 'horse', image: '/images/card-horse.png' },
    { id: '14', value: 'wolf', image: '/images/card-wolf.png' },
  ];

  return (
    <div className="Board-container">
      <div className="Board-row">
        { cards.map((card, i) => (<Card key={i} value={card.value} image={card.image} />))}
      </div>
    </div>
  );
}

export default Board;
