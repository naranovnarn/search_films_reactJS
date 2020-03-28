import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';


export const AllTages = () => {

   const {state, getFilmByTage, getAllTages} = useContext(filmsContext);
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
              title={tage}
              className='btn btn-secondary btn-sm'
              onClick={() => getFilmByTage(tage)}
            >{tage}</button>
          </div>
        );
      })}
      <div  className="col-md-auto m-1">
        <button 
          title="Свернуть обратно"
          className='btn btn-info btn-sm'
          onClick={() => getAllTages()}
        >
          Свернуть обратно</button>
      </div>
    </div>
  )
};