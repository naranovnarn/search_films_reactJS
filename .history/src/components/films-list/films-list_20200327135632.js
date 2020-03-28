import React, { useContext} from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';
import { FilmItem } from './film-Item'



export const FilmsList = () => {

  const {state} = useContext(filmsContext);
  const {films} = state;

  // const fromLocal = JSON.parse(localStorage.getItem('films'));
  const saveOnLocal = [];


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
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}
          onClick={() => saveToLocalStorage(film.title)}>
            {film.title} 
            <FilmItem title={film.title} />
          </li>
        ))}
      </ul>
    )
  } else {
    return null
  }
}
