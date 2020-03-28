import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';


export const AllTages = () => {

   const {state} = useContext(filmsContext);
   const {tages} = state;

  return (
    <div>
      {tages.map( (tage, index) => {
        return (
          <div className='card mb-3' key={index}>
        <div className="card-body">
          <h5>
            {tage}
          </h5>
        </div>
      </div>
        )
      })}
    </div>
  )
}