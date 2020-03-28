import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';


export const AllTages = () => {

   const {state} = useContext(filmsContext);
   const {tages} = state;

  return (
    <div className="d-flex flex-row bd-highlight mb-3">
      {tages.map( (tage, index) => {
        return (
          <div key={index} className="p-2 bd-highlight">{tage}</div>
        )
      })}
    </div>
  )
}