import React, { useContext} from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';



export const FilmsList = () => {

  const {state} = useContext(filmsContext);
  const {films} = state;

  const saveOnLocal = [];




  const classFavorites = ['fa fa-star'];

  const fromLocal = JSON.parse(localStorage.getItem('films'));
  
 
  

  function saveToLocalStorage(title) {
    
    saveOnLocal.push(title);
    
    const set = new Set(saveOnLocal);
    const newSave = Array.from(set);
    
    localStorage.setItem('films', JSON.stringify(newSave));

    
  }

  if (films.length > 0) {
    return (
      <ul className="list-group">
        {films.slice(0,15).map((film, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {film.title} 
            <FilmItem/>
          </li>
        ))}
      </ul>
    )
  } else {
    return null
  }
}
