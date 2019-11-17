import React, { useState, useEffect } from 'react';
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

  const [currentTurn, setCurrentTurn] = useState<Array<string>>([]);
  const [matched, setMatched] = useState<Array<string>>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const onClick = (id: string) => {
    setDisabled(true);
    setCurrentTurn([...currentTurn, id])
  };

  useEffect(() => {
    const getCardValue = (id: string ) => {
      const foundCard = cards.find(card => card.id === id);
      return foundCard ? foundCard.value : undefined;
    };

    if (currentTurn.length === 2) {
      setTimeout(() => {
        const [id1, id2] = currentTurn;
        const value1 = getCardValue(id1);
        const value2 = getCardValue(id2);
        if (value1 === value2) {
          setMatched([...matched, id1, id2]);
        }
        setCurrentTurn([]);
        setDisabled(false);
      }, 1000);
    } else {
      setDisabled(false);
    }
  }, [cards, currentTurn, matched]);

  return (
    <div className="Board-container">
      <div className="Board-row">
        { cards.map(({ id, image }) => {
          return (
            <Card
              key={id}
              id={id}
              image={image}
              visible={ currentTurn.includes(id) || matched.includes(id) }
              disabled={disabled}
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Board;
