import React, { useContext } from 'react';

import { FavoriteItem } from './favorite-item';
import { filmsContext } from '../../context/filmsContext';


export const FavoriteList = () => {

  const {reRender} = useContext(filmsContext);


  const fromLocal = JSON.parse(localStorage.getItem('films')) || [];

  const deleteToLocal = (title) => {

      const newFromLocal = fromLocal.filter(film => film !== title);

      localStorage.setItem('films', JSON.stringify(newFromLocal));

      reRender();
    
  };


  if (fromLocal.length > 0) {
    return (
      <ul className="list-group">
        {fromLocal.map((film, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index + Math.random()}
            >
            {film} 
            <FavoriteItem title={film} deleteToLocal={() => deleteToLocal(film)}/>
          </li>
        ))}
      </ul>
    );
  } else {
    return <div style={{textAlign: 'center'}}><h3>Закладки отсутствуют</h3></div>;
  }
};
