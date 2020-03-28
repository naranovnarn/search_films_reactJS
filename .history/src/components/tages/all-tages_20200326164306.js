import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';


export const AllTages = () => {

   const {state} = useContext(filmsContext);
   const {tages} = state;

  return (
    <div>
      {tages.map((tage, index) => {
        return (
            <span key={index}>{tage}</span>
        )
      }
    </div>
  )
}