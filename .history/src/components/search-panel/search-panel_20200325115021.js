import React, { useContext, useState } from 'react';

import './search-panel.css';
import { filmsContext } from '../../context/filmsContext';

export const SearchPanel = () => {

  const [value, setValue] = useState('');
  

  // const {getFilms} = useContext(filmsContext);

  onSearchChange = (e) => {
    const term = e.target.value;
    searchFilm (term);
  }

  return (
    <div>
      <input type='text'
        className='form-control search-input'
        placeholder='Введите название фильма'
        value={state.term}
        onChange={onSearchChange}
      />
    </div>
  );
};





