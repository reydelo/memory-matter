import React from 'react';
import classnames from 'classnames';
import cardBack from '../images/card-back.jpg';
import './Card.css';
import { Card as CardType } from '../data/getCards';

export interface CardProps {
  card: CardType,
  isFaceUp: boolean,
  onClick: (id: number) => void,
  disabled: boolean,
}

const Card: React.FC<CardProps> = ({card, isFaceUp, onClick, disabled}) => {
  const backgroundImage = isFaceUp ? card.image : cardBack;

  return (
    <div className={classnames('card', { 'isFaceUp': isFaceUp, 'disabled': disabled })}
      onClick={() => (!isFaceUp && !disabled) && onClick(card.id)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
}

export default Card;
