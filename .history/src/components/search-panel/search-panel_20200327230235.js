import React, { useContext } from 'react';

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
        <input type='text'
          className='form-control search-input'
          placeholder='Введите название фильма'
          onChange={onSearchChange}
        />
      </div>
    </form>
  );
};





