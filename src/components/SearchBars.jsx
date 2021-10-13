import React from 'react';
import PropTypes from 'prop-types';

class SearchBars extends React.Component {
  render() {
    const { searchName, onInputChange, searchRarity, searchTrunfo, handleFormSubmit } = this.props;
    return (
      <div className="search">
        <button type="button" onClick={ handleFormSubmit }>Salvar Cartas</button>
        <h2>Filtros de Busca</h2>
        <input
          type="text"
          data-testid="name-filter"
          value={ searchName }
          name="searchName"
          placeholder="Nome da Carta"
          onChange={ onInputChange }
        />
        <select
          data-testid="rare-filter"
          className="select-list"
          name="searchRarity"
          value={ searchRarity }
          onChange={ onInputChange }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <div className="super-trunfo">
          <label htmlFor="searchTrunfo">
            Super Trunfo
            <input
              type="checkbox"
              id="searchTrunfo"
              name="searchTrunfo"
              data-testid="trunfo-filter"
              checked={ searchTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>
      </div>
    );
  }
}

SearchBars.propTypes = {
  searchName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  searchRarity: PropTypes.string.isRequired,
  searchTrunfo: PropTypes.bool.isRequired,
};

export default SearchBars;
