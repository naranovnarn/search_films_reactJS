import React from 'react';

import './favorite-item.css'


export const FavoriteItem = ({title, saveTolocal}) => {

  const selectedFilmsFormLocal = JSON.parse(localStorage.getItem('films')) || [];
  const classIcon = selectedFilmsFormLocal.includes(title) ? 'fa fa-heart clicked' : 'fa fa-heart'

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
};