import React from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  const selectedFilmsFormLocal = JSON.parse(localStorage.getItem('films')) || [];
  let selected = selectedFilmsFormLocal.includes(title);


  return (
    <React.Fragment>
      <span
        onClick={() => saveTolocal(title)}
        className="badge badge-secondary badge-pill"
      >
        <i className={selected ? 'fa fa-heart clicked' : 'fa fa-heart'}></i>
      </span>
    </React.Fragment>
  )
}