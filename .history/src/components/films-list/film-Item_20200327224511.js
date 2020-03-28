import React from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  const selectedFilmsFormLocal = JSON.parse(localStorage.getItem('films')) || [];
  let classIcon = selectedFilmsFormLocal.includes(title) ? 'fa fa-heart clicked' : 'fa fa-heart'

  return (
    <React.Fragment>
      <span
        onClick={() => saveTolocal(title)}
        className="badge badge-secondary badge-pill"
      >
        <i className={classIcon}></i>
      </span>
    </React.Fragment>
  )
}