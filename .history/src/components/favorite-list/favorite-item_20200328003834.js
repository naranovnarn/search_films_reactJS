import React from 'react';

import './favorite-item.css'


export const FavoriteItem = ({title, deleteToLocal}) => {

  // const selectedFilmsFormLocal = JSON.parse(localStorage.getItem('films')) || [];
  // const classIcon = selectedFilmsFormLocal.includes(title) ? 'fa fa-heart clicked' : 'fa fa-heart'

  return (
    <React.Fragment>
      <span
        onClick={() => deleteToLocal(title)}
        className="badge badge-secondary badge-pill"
      >
        <i className='fa fa-heart clicked'></i>
      </span>
    </React.Fragment>
  )
};