import React, { useContext } from 'react';

import './search-panel.css';
import { filmsContext } from '../../context/filmsContext';

const SearchPanel = () => {
  

  const {getFilms, state} = useContext(filmsContext);

  console.log(getFilms)
  console.log(state)


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
      className="btn btn-primary"
      onClick={getFilms}  
    >
      получить
    </button>
    </div>
  );
};

export default SearchPanel;