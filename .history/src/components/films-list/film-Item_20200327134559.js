import React from 'react';


export const FilmItem = () => {

  const classFavorites = ['fa fa-star'];


  console.log(this.props);
  


  // function saveToLocalStorage(title) {
    
  //   saveOnLocal.push(title);
    
  //   const set = new Set(saveOnLocal);
  //   const newSave = Array.from(set);
    
  //   localStorage.setItem('films', JSON.stringify(newSave));
    
  // }

  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={classFavorites.join(',')} ></i></span>
    </React.Fragment>
  )
}