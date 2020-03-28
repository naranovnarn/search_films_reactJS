import React, { useContext, useState } from 'react';

import './search-panel.css';
import { filmsContext } from '../../context/filmsContext';

export const SearchPanel = () => {

  const {getFilm} = useContext(filmsContext);

  const [value, setValue] = useState('');
  

  // const {getFilms} = useContext(filmsContext);

  const onSearchChange = (e) => {
    const term = e.target.value;
    getFilm (term);
  }

  return (
    <div>
      <input type='text'
        className='form-control search-input'
        placeholder='Введите название фильма'
        onChange={onSearchChange}
      />
    </div>
  );
};





