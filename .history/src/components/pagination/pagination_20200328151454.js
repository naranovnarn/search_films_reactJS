import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';

import './pagionation.css';


export const Pagionation = () => {

  const { getMoreFilms } = useContext(filmsContext)

  return (
    <div className='pagionat'>
      <button 
        className='btn btn-info btn-sm'
        onClick={() => getMoreFilms()}
      >Показать еще</button>
    </div>
  );
};