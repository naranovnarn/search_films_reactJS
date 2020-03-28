import React from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  let selected = (JSON.parse(localStorage.getItem('films')) || []).length !== 0;

  function toggleClass () {
    selected = !selected;
  }
 
  return (
    <React.Fragment>
      <span
      onClick={() => toggleClass()}
        className="badge badge-secondary badge-pill"
      >
        <i className={selected ? 'fa fa-heart clicked' : 'fa fa-heart'} onClick={saveTolocal}></i>
      </span>
    </React.Fragment>
  )
}