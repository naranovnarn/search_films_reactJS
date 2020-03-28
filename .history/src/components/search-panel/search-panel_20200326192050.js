import React, { useContext } from 'react';

import './search-panel.css';
import { filmsContext } from '../../context/filmsContext';

export const SearchPanel = () => {

  const {getFilm} = useContext(filmsContext);


  const onSearchChange = (e) => {
    const term = e.target.value;
    getFilm (term);
  }

  return (
    <form >
      <div className='form-group mt-2'>
        <label><h3>Поиск фильма</h5></label>
        <input type='text'
          className='form-control search-input'
          placeholder='Введите название фильма'
          onChange={onSearchChange}
        />
      </div>
    </form>
  );
};





