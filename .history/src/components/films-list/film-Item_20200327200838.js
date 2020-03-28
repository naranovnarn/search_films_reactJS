import React, { useState, useEffect } from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  const classFavorites = [];

  let fromLocal = JSON.parse(localStorage.getItem('films')) || [];

  if (fromLocal.includes(title)) {
    classFavorites.push('fa fa-heart clicked')
  }  else {
    classFavorites.push('fa fa-heart')
  }
 

  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(' ')} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}