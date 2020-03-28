import React, { useReducer } from 'react';
import { filmsContext } from './filmsContext';
import { GET_FILMS } from './filmsTypes';
import { filmsReducer } from './filmsReducer';



export const FilmState = ({children}) => {

  const initialState = {
    films: {}
  }

  const [state, dispatch] = useReducer(filmsReducer, initialState);

  const getFilms = async () => {

    const URL = './jsons/films.json';

    const response = await fetch(URL)
      .then(data => data.json())
      .then(data => console.log(data))

    console.log(response);

    dispatch({
      type: GET_FILMS,
      payload: response
    })
  }

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
    <filmsContext.Provider value={{
      getFilms,
      state
      }}>
      {children}
    </filmsContext.Provider>
  )


}