import React, { useReducer } from 'react';
import { filmsContext } from './filmsContext';



export const FilmState = ({children}) => {

  const initialState = {
    films: {}
  }

  const [state, dispatch] = useReducer(filmsReducer, initialState)

  












  return (
    <filmsContext.Provider >
      {children}
    </filmsContext.Provider>
  )


}