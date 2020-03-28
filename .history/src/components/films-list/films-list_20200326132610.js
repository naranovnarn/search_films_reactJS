import React, { useContext} from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';



export const FilmsList = () => {

  const {state} = useContext(filmsContext);
  const {films} = state;

  if (films.length > 0) {
    
    return (
      <div className="container pt-2">
        <div className="row">
          {films.slice(0,15).map((film, index) => (
            <div className="col-sm-12 mb-2 border border-dark bg-light" key={index}>
              {film.title}
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return null
  }

}