import React from 'react';

import './films-list.css'


export const FilmItem = (props) => {

  const classFavorites = ['fa fa-heart clicked'];

  const newClass = ['fa fa-heart'];








  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} onClick={props.saveTolocal}></i></span>
    </React.Fragment>
  )
}