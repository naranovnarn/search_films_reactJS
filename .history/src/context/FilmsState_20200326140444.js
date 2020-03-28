import React, { useReducer, useEffect } from 'react';
import { filmsContext } from './filmsContext';
import { GET_FILMS, SEARCH_FILM, GET_TAGS } from './filmsTypes';
import { filmsReducer } from './filmsReducer';



export const FilmState = ({children}) => {

  const initialState = {
    films: [],
    tages: [],
  };

  const [state, dispatch] = useReducer(filmsReducer, initialState);

  useEffect(() => {

    const URL = './jsons/films.json';
    const URLTAGS = './jsons/tags.json';

    fetch(URL)
      .then(data => data.json())
      .then(response => dispatch({
        type: GET_FILMS,
        payload: response
      }));

    fetch(URLTAGS)
      .then(data => data.json())
      .then(response => dispatch({
        type: GET_TAGS,
        payload: response
      }));
  }, [])

  const getFilm = (term) => {
    const URL = './jsons/films.json';
    fetch(URL)
      .then(data => data.json())
      .then(response => dispatch({
        type: SEARCH_FILM,
        payload: searchFilm(response, term)
      }));
  }

  const getFilmsByTage = (tageName) => {
    const filmsTage = state.films.filter( (film) => film.title == tageName)
    console.log(filmsTage);
    
  }

  const searchFilm = (films, term) => {
    if (term.length === 0) {
      return films;
    } 
    return films.filter( (film) => film.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }
  
  console.log(state);
  
  return (
    <filmsContext.Provider value={{
      state, getFilm, getFilmsByTage
      }}>
      <div className='container pt-2'>
        {children}
      </div>  
    </filmsContext.Provider>
  )


}