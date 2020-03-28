import React, { useState } from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {


  const classFavorites = ['fa fa-heart']
  // let fromLocal = JSON.parse(localStorage.getItem('films'));

  // if (fromLocal.includes(title)) {
  //   classFavorites.push(' clicked')
  // }

  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(' ')} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}