import React from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  let selected = (JSON.parse(localStorage.getItem('films')) || []).length !== 0;

  function toggleClass () {
    selected = !selected;

    if (selected) {
      saveTolocal(title);
    } else {
      removeFromLocal(title);
    }
  }
 
  return (
    <React.Fragment>
      <span
        onClick={() => toggleClass()}
        className="badge badge-secondary badge-pill"
      >
        <i className={selected ? 'fa fa-heart clicked' : 'fa fa-heart'}></i>
      </span>
    </React.Fragment>
  )
}