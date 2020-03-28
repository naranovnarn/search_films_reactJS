import React from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {


  debugger
  const classFavorites = ['fa fa-heart '];

  let fromLocal = JSON.parse(localStorage.getItem('films')) || [];

  function toggleClass () {


    if (fromLocal.includes(title)) {
      classFavorites.push('clicked');
    }  else {
      classFavorites.push(' ');
    }
    debugger
 }
 

  return (
    <React.Fragment>
      <span
      onClick={() => toggleClass()}
        className="badge badge-secondary badge-pill"
      >
        <i className={classFavorites.join(' ')} onClick={saveTolocal}></i>
      </span>
    </React.Fragment>
  )
}