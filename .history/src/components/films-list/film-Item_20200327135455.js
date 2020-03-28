import React from 'react';


export const FilmItem = ({title}) => {

  const classFavorites = ['fa fa-star'];


  console.log(title)



  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')}></i></span>
    </React.Fragment>
  )
}