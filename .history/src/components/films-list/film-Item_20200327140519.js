import React from 'react';


export const FilmItem = ({title}) => {

  const classFavorites = ['fa fa-star'];

  const saveOnLocal = [];

  function saveToLocalStorage(title) {

    
    saveOnLocal.push(title);
    
    const uniqueValue = (saveOnLocal) => Array.from(new Set(saveOnLocal))
    
    localStorage.setItem('films', JSON.stringify(uniqueValue(saveOnLocal)));
    
  }



  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} onClick={() => saveToLocalStorage(title)}></i></span>
    </React.Fragment>
  )
}