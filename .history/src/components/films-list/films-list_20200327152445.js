import React, { useContext, useState} from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';
import { FilmItem } from './film-Item'



export const FilmsList = () => {

  const {state} = useContext(filmsContext);
  const {films} = state;

  // const fromLocal = JSON.parse(localStorage.getItem('films'));
  const saveTolocal = (title) => {


    

    const fromLocal = JSON.parse(localStorage.getItem('films'));

    console.log(fromLocal);

    fromLocal.push(title)

    function uniqueFilm (arr) {
      return Array.from(new Set(arr))
    }
    localStorage.setItem('films', JSON.stringify(uniqueFilm(fromLocal)));
  }

  

  

  if (films.length > 0) {
    return (
      <ul className="list-group">
        {films.slice(0,15).map((film, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}
            >
            {film.title} 
            <FilmItem title={film.title} saveTolocal={() => saveTolocal(film.title)}/>
          </li>
        ))}
      </ul>
    )
  } else {
    return null
  }
}
