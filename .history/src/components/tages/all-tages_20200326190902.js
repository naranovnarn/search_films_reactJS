import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';


export const AllTages = () => {

   const {state, getFilmByTage} = useContext(filmsContext);
   const {tages} = state;

  return (
    <div className="row">
      {tages.map( (tage, index) => {
        return (
          <div  
            key={index + Math.random()} 
            className="col-md-auto m-1"
          >
            <button 
              className='btn btn-secondary btn-sm'
              onClick={() => getFilmByTage(tage)}
            >{tage}</button>
          </div>
        )
      })}
    </div>
  )
}