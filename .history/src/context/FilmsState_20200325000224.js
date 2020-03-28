import React, { useReducer } from 'react';
import { filmsContext } from './filmsContext';



export const FilmState = ({children}) => {

  const initialState = {
    films: {}
  }

  state = {
    term: ''
  }

  const visibleItems = search(state , term);

  const [state, dispatch] = useReducer(filmsReducer, initialState)

  












  return (
    <filmsContext.Provider >
      {children}
    </filmsContext.Provider>
  )


}