import React from 'react';


export const FilmItem = (props) => {

  const classFavorites = ['fab fa-heart'];

  const newClass = ['fa fa-heart']







  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} onClick={props.saveTolocal}></i></span>
    </React.Fragment>
  )
}