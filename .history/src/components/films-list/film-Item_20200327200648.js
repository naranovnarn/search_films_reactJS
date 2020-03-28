import React, { useState, useEffect } from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {


  let fromLocal = JSON.parse(localStorage.getItem('films')) || [];

  
 

  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}