import React, { useState } from 'react';

import './films-list.css'


export const FilmItem = ({saveTolocal}) => {


  const classFavorites = 'fa fa-heart'
  let fromLocal = JSON.parse(localStorage.getItem('films'));

  if (fromLocal.includes(title)) {
    console.log('da');
    
  }

  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}