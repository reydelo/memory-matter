import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Board.css';

interface Card {
  value: string,
  image: string,
  id: number,
}

const cards = [
  { value: 'deer', image: '/images/card-deer.jpg' },
  { value: 'bear', image: '/images/card-bear.jpg' },
  { value: 'buffalo', image: '/images/card-buffalo.jpg' },
  { value: 'elk', image: '/images/card-elk.jpg' },
  { value: 'fox', image: '/images/card-fox.jpg' },
  { value: 'horse', image: '/images/card-horse.jpg' },
  { value: 'wolf', image: '/images/card-wolf.jpg' }
];

function shuffle(a: Array<any>) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }
  return a;
}

function getCards() {
  const shuffledOptions = shuffle(cards).slice(0, 6);
  const duplicatedOptions = shuffle([...shuffledOptions, ...shuffledOptions]);
  return duplicatedOptions.map((card, i) => {
      return { ...card, id: i };
  });
};

const Board: React.FC = () => {
  const [cards, setCards] = useState<Array<Card>>(getCards());
  const [currentTurn, setCurrentTurn] = useState<Array<number>>([]);
  const [matched, setMatched] = useState<Array<number>>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const onClick = (id: number) => {
    setDisabled(true);
    setCurrentTurn([...currentTurn, id])
  };

  useEffect(() => {
    const getCardValue = (id: number ) => {
      const foundCard = cards.find(card => card.id === id);
      return foundCard ? foundCard.value : undefined;
    };

    if (currentTurn.length === 2) {
      setTimeout(() => {
        const [id1, id2] = currentTurn;
        const value1 = getCardValue(id1);
        const value2 = getCardValue(id2);
        if (value1 === value2) {
          setCurrentTurn([]);
          setMatched([...matched, id1, id2]);
        } else {
          setCurrentTurn([]);
        }
        setDisabled(false);
      }, 1000);
    } else {
      setDisabled(false);
    }
  }, [cards, currentTurn, matched]);

  useEffect(() => {
    if (matched.length === cards.length) {
      setDisabled(true);
      setSuccess(true);
      setTimeout(() => {
        setMatched([]);
        setCards(getCards());
        setSuccess(false);
        setDisabled(false);
      }, 5000);
    }
  }, [cards, matched]);

  return (
    <div className={`Board ${success ? 'success' : ''}`}>
        {success && <div className="Board-success-message">All matches found! Impressive!</div>}
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
  );
}

export default Board;
