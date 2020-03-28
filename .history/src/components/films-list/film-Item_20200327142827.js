import React, { useState } from 'react';


export const FilmItem = ({title, filmLocal}) => {

  const classFavorites = ['fa fa-star'];

  
  // function saveToLocalStorage(title) {

    
  //   setSaveOnLocal(saveOnLocal.push(title));

  //   console.log(saveOnLocal);
    
    
  //   const set = new Set(saveOnLocal);
  //   const newSave = Array.from(set);
    
  //   localStorage.setItem('films', JSON.stringify(newSave));
    
  // }



  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}