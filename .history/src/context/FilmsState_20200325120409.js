import React, { useReducer, useEffect } from 'react';
import { filmsContext } from './filmsContext';
import { GET_FILMS } from './filmsTypes';
import { filmsReducer } from './filmsReducer';



export const FilmState = ({children}) => {

  const initialState = {
    films: {}
  };

  const [state, dispatch] = useReducer(filmsReducer, initialState);

  useEffect(() => {

    const URL = './jsons/films.json';

    fetch(URL)
      .then(data => data.json())
      .then(response => dispatch({
        type: GET_FILMS,
        payload: response
      }));
  }, [])

  const getFilm = (term) => {

    fetch(URL)
      .then(data => data.json())
      .then(response => filter (response, term))
      .then(response => dispatch({
        type: SEARCH_FILM,
        payload: response
      }));
  }




  filter (films, term) {
    if (term.length === 0) {
      return films;
    } else {
    return fulms.filter( (fulm) => film.title.indexOf(film)) > -1;
    }
  }

  // const visibleItems = search(state , term);




  return (
    <filmsContext.Provider value={{
      state
      }}>
      <div className='container'>
        {children}
      </div>  
    </filmsContext.Provider>
  )


}