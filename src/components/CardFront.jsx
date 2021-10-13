import React from 'react';
import PropTypes from 'prop-types';

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
      <div className={ `card card-front ${cardRare.replace(/\s/g, '')}` }>
        <div className="card-border">
          <div className="card-title-container">
            <h2 className="card-title" data-testid="name-card">
              {cardName}
            </h2>
            <div>
              {cardTrunfo && (
                <p className="trunfo-title" data-testid="trunfo-card">
                  Super Trunfo
                </p>
              )}
            </div>
          </div>
          <div>
            {cardImage !== '' ? (
              <img
                className="card-image"
                src={ cardImage }
                alt={ cardName }
                data-testid="image-card"
              />
            ) : (
              <img
                className="card-image"
                src="https://i.ibb.co/KV5KwPz/200x200-0000007f.png"
                alt="blank"
              />)}
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
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default CardFront;
