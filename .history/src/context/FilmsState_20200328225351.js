import React, { useReducer, useEffect } from 'react';
import { filmsContext } from './filmsContext';
import { GET_FILMS, SEARCH_FILM, GET_TAGS, GET_LIST_TAGS, RE_RENDER, GET_MORE_FILMS} from './filmsTypes';
import { filmsReducer } from './filmsReducer';


export const FilmState = ({children}) => {

  const initialState = {
    films: [],
    tages: [],
    toogleOpen: false,
    countItem: 15
  };

  const [state, dispatch] = useReducer(filmsReducer, initialState);

  useEffect(() => {

    const URL = 'https://gist.githubusercontent.com/naranovnarn/edf124175a69ded82c68730c108890a2/raw/28449a00b1f72d6d89eb018c36a97639dedf8fc2/films.json';
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

  const getAllTages = () => {
    dispatch({
      type: GET_LIST_TAGS,
      payload: !state.toogleOpen
    })
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

  const  reRender = () => {
    dispatch({
      type: RE_RENDER
    })
  }

  const getMoreFilms = () =>[
    dispatch({
      type: GET_MORE_FILMS
    })
  ]
  
  return (
    <filmsContext.Provider value={{
      state, getFilm, getFilmByTage, getAllTages, reRender, getMoreFilms
      }}>
      <div className='container pt-2'>
        {children}
      </div>  
    </filmsContext.Provider>
  )


}