import React, { useState, useEffect } from 'react';

import './films-list.css'


export const FilmItem = ({title, saveTolocal}) => {

  const state = {
    classFavorites: ['fa fa-heart']
  }

  // const classFavorites = ['fa fa-heart'];

  let fromLocal = JSON.parse(localStorage.getItem('films')) || [];

  useEffect(
    () => {
      if(fromLocal.includes(title)){
        console.log('123');
        
        state.classFavorites.push(' clicked')
      }
      console.log(state.classFavorites)
    }
  )

  return (
    <React.Fragment>
    <span 
        className="badge badge-secondary badge-pill"
        ><i className={state.classFavorites.join(',')} onClick={saveTolocal}></i></span>
    </React.Fragment>
  )
}