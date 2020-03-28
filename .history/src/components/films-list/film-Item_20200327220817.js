import React from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  function toggleClass () {

    const classFavorites = [];

    let fromLocal = JSON.parse(localStorage.getItem('films')) || [];

    if (fromLocal.includes(title)) {
      classFavorites.push('fa fa-heart clicked');
    }  else {
      classFavorites.push('fa fa-heart');
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