import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';


export const AllTages = () => {

   const {state} = useContext(filmsContext);
   const {tages} = state;

  return (
    <div className="">
      {tages.map( (tage, index) => {
        return (
          <span class="border border-primary">{tage}</span>
        )
      })}
    </div>
  )
}