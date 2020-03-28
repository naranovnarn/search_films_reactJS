import React from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  const classFavorites = ['fa fa-heart '];

  function toggleClass () {

    let fromLocal = JSON.parse(localStorage.getItem('films')) || [];

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