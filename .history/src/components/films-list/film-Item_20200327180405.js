import React, { useState } from 'react';

import './films-list.css'


export const FilmItem = ({saveTolocal}) => {




  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}