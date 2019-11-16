import React from 'react';
import './Card.css';

export interface CardProps {
  value: string,
  image: string,
}

const Card: React.FC<CardProps> = (props) => {
  const [visible, toggleVisibility] = React.useState(false);
  const backgroundImage = visible ? props.image : '/images/card-front.png';
  return (
    <div className="card"
      onClick={() => { toggleVisibility(!visible) }}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
}

export default Card;
