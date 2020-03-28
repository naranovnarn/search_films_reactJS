import React, { useState } from 'react';


export const FilmItem = ({title, }) => {

  const classFavorites = ['fa fa-star'];

  
  

  console.log(saveOnLocal);
  

  function saveToLocalStorage(title) {

    
    setSaveOnLocal(saveOnLocal.push(title));

    console.log(saveOnLocal);
    
    
    const set = new Set(saveOnLocal);
    const newSave = Array.from(set);
    
    localStorage.setItem('films', JSON.stringify(newSave));
    
  }



  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} onClick={() => saveToLocalStorage(title)}></i></span>
    </React.Fragment>
  )
}