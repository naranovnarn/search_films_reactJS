import React, { useContext } from 'react';

import './pagionation.css'
import { filmsContext } from '../../context/filmsContext';

export const Pagionation = () => {

  const {getMoreFilms} = useContext(filmsContext)

  return (
    <div className='pagionat'>
      <button 
        className='btn btn-info btn-sm'
        onClick={() => getMoreFilms()}
      >Показать еще</button>
    </div>
  )
}