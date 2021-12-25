import React from 'react';
import PropTypes from 'prop-types';
import emptyCard from '../assets/empty-card-placeholder.png';

class CardFront extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div
        className={`card card-front ${
          cardRare ? cardRare.replace(/\s/g, '') : ''
        }`}
      >
        <div className="card-border">
          <div className="card-title-container">
            <h2 className="card-title" data-testid="name-card">
              {cardName}
            </h2>
            <div>
              {cardTrunfo && (
                <p className="trunfo-title" data-testid="trunfo-card">
                  Super Trump
                </p>
              )}
            </div>
          </div>
          <div>
            {cardImage !== '' ? (
              <img
                className="card-image"
                src={cardImage}
                alt={cardName}
                data-testid="image-card"
              />
            ) : (
              <img className="card-image" src={emptyCard} alt="blank" />
            )}
          </div>
          <div>
            <p className="description" data-testid="description-card">
              {cardDescription}
            </p>
          </div>
          <div className="attributes">
            {cardAttr1 !== 0 && (
              <div className="attribute-container">
                <p>Attr1.........................</p>
                <p className="attribute-number" data-testid="attr1-card">
                  {cardAttr1}
                </p>
              </div>
            )}
            {cardAttr2 !== 0 && (
              <div className="attribute-container">
                <p>Attr2.........................</p>
                <p className="attribute-number" data-testid="attr2-card">
                  {cardAttr2}
                </p>
              </div>
            )}
            {cardAttr3 !== 0 && (
              <div className="attribute-container">
                <p>Attr3.........................</p>
                <p className="attribute-number" data-testid="attr3-card">
                  {cardAttr3}
                </p>
              </div>
            )}
          </div>
          <p className="rarity" data-testid="rare-card">
            {cardRare}
          </p>
        </div>
      </div>
    );
  }
}

CardFront.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

export default CardFront;
