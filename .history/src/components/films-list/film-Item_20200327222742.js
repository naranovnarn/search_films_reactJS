import React from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  const selectedFilmsFormLocal = JSON.parse(localStorage.getItem('films')) || [];
  let selected = selectedFilmsFormLocal.includes(title);

  function toggleClass () {
    selected = !selected;
    saveTolocal(title);
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