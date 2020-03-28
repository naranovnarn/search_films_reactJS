import React, { useContext} from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';



export const FilmsList = () => {

  const {state} = useContext(filmsContext);
  const {films} = state;

  const saveOnLocal = [];

  const classFavorites = ['fa fa-star'];

  
  


  function saveToLocalStorage(title) {
    
    saveOnLocal.push(title);
    
    const set = new Set(saveOnLocal);
    const newSave = Array.from(set);

    if (classFavorites.join('') === 'fa fa-star') {
      classFavorites.splice(0,1, 'fa fa-adjust')
    } else {
      classFavorites.splice(0,1, 'fa fa-star')
    }
    
    
    localStorage.setItem('films', JSON.stringify(newSave))
    // const fromLocal = JSON.parse(localStorage.getItem('films'))
    // console.log(FromLocal);
  }

  if (films.length > 0) {
    return (
      <div className="list-group">
        {films.slice(0,15).map((film, index) => (
          <div className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {film.title} 
            <span 
              className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} onClick={() => saveToLocalStorage(film.title)}></i></span>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}
