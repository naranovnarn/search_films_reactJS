import React, { useContext } from 'react';

import './search-panel.css';
import { filmsContext } from '../../context/filmsContext';

 export const SearchPanel = () => {
  

  const {getFilms} = useContext(filmsContext);

  console.log(getFilms);
  
  // onSearchChange = (e) => {
  //   const term = e.target.value;
  //   changeTerm (term)
  // }

  return (
    <div>
      <input type='text'
        className='form-control search-input'
        placeholder='Введите название фильма'
        // value={state.term}
        // onChange={onSearchChange}
      />
      <button 
        className="btn btn-secondary"
        // onClick={() => getFilms()}  
      >
        получить
      </button>
    </div>
  );
};



