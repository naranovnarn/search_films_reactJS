import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';


export const AllTages = () => {

   const {state} = useContext(filmsContext);
   const {tages} = state;

  return (
    <div className="row">
      {tages.map( (tage, index) => {
        return (
          <div  key={index + Math.random()}className="col-md-auto"><button className='btn btn-'>{tage}</button></div>
        )
      })}
    </div>
  )
}