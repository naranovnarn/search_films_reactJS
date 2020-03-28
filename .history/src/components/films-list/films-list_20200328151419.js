import React, { useContext} from 'react';

import { filmsContext } from '../../context/filmsContext';
import { FilmItem } from './film-Item';


export const FilmsList = () => {

  const {state, reRender} = useContext(filmsContext);
  const {films, countItem} = state;
  

  const saveToLocal = (title) => {

    let fromLocal = JSON.parse(localStorage.getItem('films')) || [];

    if (fromLocal.includes(title)) {
      
      const newFromLocal = fromLocal.filter(film => film !== title);

      localStorage.setItem('films', JSON.stringify(newFromLocal));

      reRender();
    } else {

      fromLocal.push(title);

      localStorage.setItem('films', JSON.stringify(fromLocal));

      reRender();
    }
  };

  
  
  if (films.length > 0) {
    return (
      <ul className="list-group">
        {films.slice(0,countItem).map((film, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index + Math.random()}
            >
            {film.title} 
            <FilmItem title={film.title} saveToLocal={() => saveToLocal(film.title)} />
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};
