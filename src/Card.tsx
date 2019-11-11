import React from 'react';
import './Card.css';

export interface CardProps {
  value: string
}

const Card: React.FC<CardProps> = (props) => {
  const [visible, toggleVisibility] = React.useState(false);

  return (
    <div className={`card ${visible ? 'visible' : 'hidden'}`} onClick={() => { toggleVisibility(!visible) }}>
      <div className="front"></div>
      <div className="back">{props.value}</div>
    </div>
  );
}

export default Card;
