import React from 'react';

import { FavoriteItem } from './favorite-item';


export const FavoriteList = () => {

  

  let fromLocal = JSON.parse(localStorage.getItem('films')) || [];


  if (fromLocal.length > 0) {
    return (
      <ul className="list-group">
        {fromLocal.map((film, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index + Math.random()}
            >
            {film} 
            <FavoriteItem title={film} deleteTolocal={() => deleteTolocal(film)}/>
          </li>
        ))}
      </ul>
    );
  } else {
    return <div><h3>Закладки отсутсвуют</h3></div>;
  }
};
