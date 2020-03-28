import React, { useState } from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  const [classFavorites, setClassFavorutes] = useState(['fa fa-heart'])

  // const classFavorites = ['fa fa-heart'];

  let fromLocal = JSON.parse(localStorage.getItem('films')) || [];

  if (fromLocal.includes(title)) {
    setClassFavorutes(console.log('123'))
  }

  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(' ')} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}