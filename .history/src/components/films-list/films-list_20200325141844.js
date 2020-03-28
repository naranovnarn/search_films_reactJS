import React, { useContext} from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';



export const FilmsList = () => {

  const {state} = useContext(filmsContext);

  if (state.films.length > 0) {
    const films = state.films.slice(0,15);
    return (
      <div className="container pt-4">
        <div className="row">
          {films.map((film, index) => (
            <div className="col-sm-12 m-2 border border-dark bg-light" key={index}>
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