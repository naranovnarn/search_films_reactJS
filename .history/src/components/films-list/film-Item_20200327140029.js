import React from 'react';


export const FilmItem = ({title}) => {

  const classFavorites = ['fa fa-star'];


  console.log(title)



  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} onClick={() => saveToLocalStorage(film.title)}></i></span>
    </React.Fragment>
  )
}