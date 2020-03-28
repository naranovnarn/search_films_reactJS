import React, { useContext} from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';



export const FilmsList = () => {

  const {state} = useContext(filmsContext);
  const {films} = state;

  if (films.length > 0) {
    return (
      <div className="list-group">
        {films.slice(0,15).map((film, index) => (
          <div className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {film.title} 
            <span className="badge badge-secondary badge-pill"><i className="far fa-star"></i></span>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}
