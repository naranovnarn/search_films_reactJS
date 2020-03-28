import React from 'react';


export const FilmItem = (props) => {

  const classFavorites = ['fa fa-heart'];

  const newClass = ['fa fa-star']







  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={newClass.join(',')} onClick={props.saveTolocal}></i></span>
    </React.Fragment>
  )
}