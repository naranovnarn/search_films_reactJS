import React from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  let selectedFilmsFormLocal = JSON.parse(localStorage.getItem('films')) || [];
  let selected = selectedFilmsFormLocal.includes(title);
  let classNameIcon = selected ? 'fa fa-heart clicked' : 'fa fa-heart';

  function toggleClass () {
    selected = !selected;
    classNameIcon = selected ? 'fa fa-heart clicked' : 'fa fa-heart';
    saveTolocal(title);
  }

  debugger
 
  return (
    <React.Fragment>
      <span
        onClick={() => toggleClass()}
        className="badge badge-secondary badge-pill"
      >
        <i className={classNameIcon}></i>
      </span>
    </React.Fragment>
  )
}