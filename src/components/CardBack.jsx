import React from 'react';
import cardBack from '../assets/card-back-logo.png';

class CardBack extends React.Component {
  render() {
    return (
      <div className="card-back card">
        <img src={cardBack} alt="trybe card logo" />
      </div>
    );
  }
}

export default CardBack;
