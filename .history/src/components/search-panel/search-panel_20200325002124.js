import React from 'react';

import './search-panel.css';

const SearchPanel = () => {


  onSearchChange = (e) => {
    const term = e.target.value;
    changeTerm (term)
  }

  return (
    <input type='text'
      className='form-control search-input'
      placeholder='Введите название фильма'
      value={state.term}
      onChange={onSearchChange}
    />
    <button className="btn btn-primary">
      получить
    </button>
  );
};

export default SearchPanel;