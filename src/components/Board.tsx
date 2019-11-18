import React, { useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import Card from './Card';
import getCards, { Card as CardType } from '../data/getCards';
import './Board.css';

const Board: React.FC = () => {
  const [cards, setCards] = useState<Array<CardType>>(() => getCards());
  const [selectedCards, setSelectedCards] = useState<Array<CardType>>([]);
  const [disabled, setDisabled] = useState(false);
  const [matchedCards, setMatchedCards] = useState<Array<CardType>>([]);
  const [success, setSuccess] = useState(false);

  function onCardClick(card: CardType) {
    setDisabled(true);
    setSelectedCards([...selectedCards, card])
  };

  const checkForMatch = useCallback(() => {
    const [card1, card2] = selectedCards;

    if (card1.value === card2.value) {
      setSelectedCards([]);
      setMatchedCards(m => [...m, card1, card2]);
    } else {
      setSelectedCards([]);
    }
    setDisabled(false);
  }, [selectedCards]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => checkForMatch(), 1000);
    } else {
      setDisabled(false);
    }
  }, [selectedCards, checkForMatch]);

  function resetGame() {
    setMatchedCards([]);
    setCards(getCards());
    setSuccess(false);
    setDisabled(false);
  };

  function checkForSuccess() {
    if (matchedCards.length === cards.length) {
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
              isFaceUp={selectedCards.includes(card) || matchedCards.includes(card)}
              disabled={disabled}
              onClick={onCardClick}
            />
          );
        })}
    </div>
  );
}

export default Board;
