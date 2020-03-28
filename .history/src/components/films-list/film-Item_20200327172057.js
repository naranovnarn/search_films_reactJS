import React from 'react';


export const FilmItem = (props) => {

  const classFavorites = ['fa fa-gratipay'];

  const newClass = ['fa fa-heart']







  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={newClass.join(',')} onClick={props.saveTolocal}></i></span>
    </React.Fragment>
  )
}