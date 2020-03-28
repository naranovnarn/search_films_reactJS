import React, { useState, useEffect } from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  let classFavorites = 'fa fa-heart';
  

  // const classFavorites = ['fa fa-heart'];

  let fromLocal = JSON.parse(localStorage.getItem('films')) || [];

  useEffect(
    () => {
      if(fromLocal.includes(title)){
        classFavorites = '123'
      } 
    })

  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}