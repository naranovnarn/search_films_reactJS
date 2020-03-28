import React from 'react';

import './search-panel.css';

const SearchPanel = () => {


  onSearchChange = (e) => {
    const term = e.target.value;
  }

  return (
    <input type='text'
      className='form-control search-input'
      placeholder='Введите название фильма'
      value={state.term}
      onChange={onSearchChange}
    />
  );
};

export default SearchPanel;