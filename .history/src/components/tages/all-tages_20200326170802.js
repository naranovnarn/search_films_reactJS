import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';


export const AllTages = () => {

   const {state} = useContext(filmsContext);
   const {tages} = state;

  return (
    <div className="row">
      {tages.map( (tage, index) => {
        return (
          <div className="col-md-auto">{tage}</div>
        )
      })}
    </div>
  )
}