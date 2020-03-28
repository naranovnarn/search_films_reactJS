import React, { useContext, useState} from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';
import { FilmItem } from './film-Item'



export const FilmsList = () => {

  const {state} = useContext(filmsContext);
  const {films} = state;

  const {filmLocal, setSaveOnLocal} = useState([]);

  // const fromLocal = JSON.parse(localStorage.getItem('films'));
  const saveTolocal = () => {
    console.log('123');
    setSaveOnLocal(filmLocal.push(film.title));
    console.log(filmLocal);
    const set = new Set(filmLocal);
    const newSave = Array.from(set);
    localStorage.setItem('films', JSON.stringify(newSave));
  }
  
   // function saveToLocalStorage(title) {

    
  //   setSaveOnLocal(saveOnLocal.push(title));
  //   const set = new Set(saveOnLocal);
  //   const newSave = Array.from(set);
    
  //   localStorage.setItem('films', JSON.stringify(newSave));
    
  // }
  

  

  if (films.length > 0) {
    return (
      <ul className="list-group">
        {films.slice(0,15).map((film, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}
            >
            {film.title} 
            <FilmItem title={film.title} filmLocal={filmLocal} saveTolocal={saveTolocal}/>
          </li>
        ))}
      </ul>
    )
  } else {
    return null
  }
}
