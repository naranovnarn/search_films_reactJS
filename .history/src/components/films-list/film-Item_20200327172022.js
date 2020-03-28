import React from 'react';


export const FilmItem = (props) => {

  const classFavorites = ['fa fa-gratipay'];







  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} onClick={props.saveTolocal}></i></span>
    </React.Fragment>
  )
}