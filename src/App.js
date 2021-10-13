import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import SearchBars from './components/SearchBars';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  searchName: '',
  searchRarity: 'todas',
  searchTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      newCard: [],
      hasTrunfo: false,
    };
  }

  componentDidMount() {
    const cards = localStorage.getItem('newCard');
    this.setState({ newCard: JSON.parse(cards) })
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => this.verifyButton(),
    );
  };

  checkTextInputs = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    if (
      cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
    ) {
      return false;
    }
    return true;
  };

  checkNumberInputs = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr1Value = Number(cardAttr1);
    const attr2Value = Number(cardAttr2);
    const attr3Value = Number(cardAttr3);
    const maxSum = 210;
    const maxAttrValue = 90;
    const minAttrValue = 0;
    const sumAttr = attr1Value + attr2Value + attr3Value > maxSum;
    if (
      sumAttr
      || attr1Value < minAttrValue
      || attr1Value > maxAttrValue
      || attr2Value < minAttrValue
      || attr2Value > maxAttrValue
      || attr3Value < minAttrValue
      || attr3Value > maxAttrValue
    ) {
      return false;
    }
    return true;
  };

  verifyButton = () => {
    const textInputsValid = this.checkTextInputs();
    const numberInputsValid = this.checkNumberInputs();
    const buttonDisable = numberInputsValid && textInputsValid;
    this.setState({ isSaveButtonDisabled: !buttonDisable });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { newCard, hasTrunfo, ...allStates } = this.state;
    this.setState((prev) => ({
      newCard: [...prev.newCard, allStates],
      hasTrunfo: allStates.cardTrunfo ? true : hasTrunfo,
      ...initialState,
    }));
  };

  deleteCard = (cardTitle, isTrunfo) => {
    const { newCard } = this.state;

    this.setState((prev) => ({
      newCard: newCard.filter((card) => card.cardName !== cardTitle),
      hasTrunfo: isTrunfo ? false : prev.hasTrunfo,
    }));
  };

  filterNameRarity = () => {
    const { searchName, searchRarity, searchTrunfo, newCard } = this.state;

    if (searchTrunfo) {
      return newCard.filter((card) => card.cardTrunfo === true);
    }

    if (searchName !== '') {
      return newCard.filter((card) => card.cardName.includes(searchName));
    }

    if (searchRarity !== 'todas') {
      return newCard.filter((card) => card.cardRare === searchRarity);
    }

    return newCard;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { newCard } = this.state;
    localStorage.setItem('newCard', JSON.stringify(newCard));
  }

  render() {
    const { newCard } = this.state;
    return (
      <>
        <div className="main-container">
          <div className="form-container">
            <h1>Adicionar nova carta</h1>
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="card-container">
            <Card { ...this.state } />
          </div>
        </div>
        <div className="all-cards">
          <SearchBars
            { ...this.state }
            onInputChange={ this.onInputChange }
            handleFormSubmit={ this.handleFormSubmit }
          />
          <div className="cards-display">
            {newCard !== undefined
            && this.filterNameRarity().map((elem) => (
              <div key={ elem.cardName } className="card-btn">
                <Card { ...elem } />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.deleteCard(elem.cardName, elem.cardTrunfo) }
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
