import React from 'react';

import './favorite-item.css'


export const FavoriteItem = ({title, deleteToLocal}) => {

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