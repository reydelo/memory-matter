import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Card from './Card';
import getCards from '../data/getCards';
import './Board.css';

const Board: React.FC = () => {
  const [cards, setCards] = useState(() => getCards());
  const [currentTurn, setCurrentTurn] = useState<Array<number>>([]);
  const [disabled, setDisabled] = useState(false);
  const [matched, setMatched] = useState<Array<number>>([]);
  const [success, setSuccess] = useState(false);

  function onCardClick(id: number) {
    setDisabled(true);
    setCurrentTurn([...currentTurn, id])
  };

  useEffect(() => {
    function getCardValue(id: number) {
      const foundCard = cards.find(card => card.id === id);

      return foundCard ? foundCard.value : undefined;
    };

    function checkForMatch() {
      const [id1, id2] = currentTurn;
      const value1 = getCardValue(id1);
      const value2 = getCardValue(id2);

      if (value1 === value2) {
        setCurrentTurn([]);
        setMatched(m => [...m, id1, id2]);
      } else {
        setCurrentTurn([]);
      }
      setDisabled(false);
    }

    if (currentTurn.length === 2) {
      setTimeout(() => checkForMatch(), 1000);
    } else {
      setDisabled(false);
    }
  }, [currentTurn, cards]);

  function resetGame() {
    setMatched([]);
    setCards(getCards());
    setSuccess(false);
    setDisabled(false);
  };

  function checkForSuccess() {
    if (matched.length === cards.length) {
      setDisabled(true);
      setSuccess(true);
      setTimeout(() => resetGame(), 5000);
    }
  }

  useEffect(() => checkForSuccess());

  return (
    <div className={classnames('Board', {'success': success})}>
        {success && <div className="Board-success-message">All matches found! Impressive!</div>}
        { cards.map(card => {
          return (
            <Card
              key={card.id}
              card={card}
              isFaceUp={ currentTurn.includes(card.id) || matched.includes(card.id) }
              disabled={disabled}
              onClick={onCardClick}
            />
          );
        })}
    </div>
  );
}

export default Board;
