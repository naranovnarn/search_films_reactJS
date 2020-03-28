import React, { useState } from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  state = {
    classFavorites: ['fa fa-heart']
  }

  // const classFavorites = ['fa fa-heart'];

  let fromLocal = JSON.parse(localStorage.getItem('films')) || [];

  if (fromLocal.includes(title)) {
    setClassFavorutes(console.log('123'))
  }

  console.log(classFavorites);
  
  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(' ')} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}