import React from 'react';

import './films-list.css'


export const FilmItem = ({title , saveTolocal}) => {

  const classFavorites = ['fa fa-heart clicked'];

  const newClass = ['fa fa-heart'];


  console.log(title);
  
  








  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}