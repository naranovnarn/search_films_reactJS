import React from 'react';


export const FilmItem = ({title}) => {

  const classFavorites = ['fa fa-star'];


  console.log(title)

  
  


  function saveToLocalStorage() {


    const saveOnLocal = []
    
    saveOnLocal.push(title);
    
    const set = new Set(saveOnLocal);
    const newSave = Array.from(set);
    
    localStorage.setItem('films', JSON.stringify(newSave));
    
  }

  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} onClick={() => saveToLocalStorage()}></i></span>
    </React.Fragment>
  )
}