import React, { useContext} from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';



export const FilmsList = () => {

  const {state} = useContext(filmsContext);
  const {films} = state;

  const saveOnLocal = [];


  function saveToLocalStorage(title) {
    
    saveOnLocal.push(title);
    
    const set = new Set(saveOnLocal)
    
    localStorage.setItem('films', JSON.stringify(set))
    const get = JSON.parse(localStorage.getItem('films'))
    console.log(get);
    
  }

  if (films.length > 0) {
    return (
      <div className="list-group">
        <div>tut loacl {localStorage.getItem('films')}</div>
        {films.slice(0,15).map((film, index) => (
          <div className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {film.title} 
            <span 
              className="badge badge-secondary badge-pill"
        ><i className="fa fa-star" onClick={() => saveToLocalStorage(film.title)}></i></span>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}
