import React from 'react';
import PropTypes from 'prop-types';
import { BsLink45Deg } from "react-icons/bs";

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    return (
      <form>
        <label htmlFor="name-input">
          <span>Nome</span>
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            id="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          <span>Descrição</span>
          <textarea
            id="description-input"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label className="attr-label" htmlFor="attr1-input">
          <span>Atributo 01</span>
          <input
            type="number"
            id="attr1-input"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label className="attr-label" htmlFor="attr2-input">
          <span>Atributo 02</span>
          <input
            type="number"
            id="attr2-input"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label className="attr-label" htmlFor="attr3-input">
          <span>Atributo 03</span>
          <input
            type="number"
            id="attr3-input"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <div className="points-left">
          <p>Pontos Restantes: { 210 - (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) }</p>
        </div>

        <label htmlFor="imageSrc">
          <span>Imagem</span>
          <div className="image-container">
            <BsLink45Deg className="fa-link" />
            <input
              type="text"
              id="imageSrc"
              name="cardImage"
              className="imageInput"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </div>
        </label>

        <label htmlFor="rarity">
        <span>Raridade</span>
          <select
            id="rarity"
            data-testid="rare-input"
            name="cardRare"
            className="select-list"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {hasTrunfo ? (
          <p className="super-trunfo">Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <div className="super-trunfo">
            <label className="checkbox-label" htmlFor="superTrump">
              <span>Super Trunfo</span>
              <input
                type="checkbox"
                id="superTrump"
                name="cardTrunfo"
                className="checkbox-superTrunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          </div>
        )}

        <div className="saveBtn-container">
          <button
            className="save-btn"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
