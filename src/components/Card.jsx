import React from 'react';
import PropTypes from 'prop-types';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends React.Component {
  constructor() {
    super();

    this.state = { flipped: false };
  }

  toggleFlipped = () => {
    const { flipped } = this.state;
    this.setState({ flipped: !flipped });
  };

  render() {
    const { flipped } = this.state;

    return (
      <>
        <div 
          className="flip-card" 
          onMouseEnter={ this.toggleFlipped } 
          onMouseLeave={ this.toggleFlipped }
        >
          <div
            className={
              flipped ? 'flip-card-inner is-flipped' : 'flip-card-inner'
            }
          >
            <CardFront { ...this.props } />
            <CardBack />
          </div>
        </div>
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
