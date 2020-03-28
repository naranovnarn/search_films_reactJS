import React, { useContext} from 'react';

import { filmsContext } from '../../context/filmsContext';
import { FavoriteItem } from './favorite-item';


export const FavoriteList = () => {

  const {state} = useContext(filmsContext);
  const {films} = state;

  
  if (films.length > 0) {
    return (
      <ul className="list-group">
        {films.slice(0,15).map((film, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index + Math.random()}
            >
            {film.title} 
            <FavoriteItem title={film.title} />
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};
