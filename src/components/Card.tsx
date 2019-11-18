import React from 'react';
import classnames from 'classnames';
import cardBack from '../images/card-back.jpg';
import './Card.css';

export interface CardProps {
  id: number,
  image: string,
  isFaceUp: boolean,
  onClick: (id: number) => void,
  disabled: boolean,
}

const Card: React.FC<CardProps> = ({id, image, isFaceUp, onClick, disabled}) => {
  const backgroundImage = isFaceUp ? image : cardBack;

  return (
    <div className={classnames('card', { 'isFaceUp': isFaceUp, 'disabled': disabled })}
      onClick={() => isFaceUp || disabled ? null : onClick(id)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
}

export default Card;
