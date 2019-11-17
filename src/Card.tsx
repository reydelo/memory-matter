import React from 'react';
import './Card.css';

export interface CardProps {
  id: number,
  image: string,
  visible: boolean,
  onClick: (id: number) => void,
  disabled: boolean,
}

const Card: React.FC<CardProps> = ({id, image, visible, onClick, disabled}) => {
  const backgroundImage = visible ? image : '/images/card-front.png';
  return (
    <div className={`card ${visible && 'visible'} ${disabled && 'disabled'}`}
      onClick={() => visible || disabled ? null : onClick(id)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
}

export default Card;
