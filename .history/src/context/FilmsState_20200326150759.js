import React, { useReducer, useEffect } from 'react';
import { filmsContext } from './filmsContext';
import { GET_FILMS, SEARCH_FILM, GET_TAGS} from './filmsTypes';
import { filmsReducer } from './filmsReducer';




export const FilmState = ({children}) => {

  const initialState = {
    films: [],
    tages: [],
    toogleOpen: false
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

  const getFilmByTage = (tag) => {
    const URL = './jsons/films.json';
    fetch(URL)
      .then(data => data.json())
      .then(response => dispatch({
        type: SEARCH_FILM,
        payload: searchFilmByTage(response, tag)
      }));
  }


  const searchFilm = (films, term) => {
    if (term.length === 0) {
      return films;
    } 
    return films.filter( (film) => film.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }

  const searchFilmByTage = (films, tag ) => {
    return films.filter( (film) => film.tags.includes(tag))
  }
  
  return (
    <filmsContext.Provider value={{
      state, getFilm, getFilmByTage
      }}>
      <div className='container pt-2'>
        {children}
      </div>  
    </filmsContext.Provider>
  )


}