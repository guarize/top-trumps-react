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
      <div
        className="flip-card"
        onMouseEnter={this.toggleFlipped}
        onMouseLeave={this.toggleFlipped}
      >
        <div
          className={flipped ? 'flip-card-inner is-flipped' : 'flip-card-inner'}
        >
          <CardFront {...this.props} />
          <CardBack />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

export default Card;
