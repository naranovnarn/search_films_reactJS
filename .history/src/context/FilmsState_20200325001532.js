import React, { useReducer } from 'react';
import { filmsContext } from './filmsContext';
import { GET_FILMS } from './filmsTypes';
import { filmsReducer } from './filmsReducer';



export const FilmState = ({children}) => {

  const initialState = {
    films: {}
  }

  const [state, dispatch] = useReducer(filmsReducer, initialState);

  

  // state = {
  //   term: ''
  // }


  // search (items, term) {

  //   if (term.length === 0) {
  //     return items;
  //   }

  //   return items.filter( (item) => item.label.indexOf(term)) > -1;
  // }

  // const visibleItems = search(state , term);

 

  




  return (
    <filmsContext.Provider >
      {children}
    </filmsContext.Provider>
  )


}