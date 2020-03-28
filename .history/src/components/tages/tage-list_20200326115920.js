import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';

export const TageList = () => {

  const {state} = useContext(filmsContext);
  const {tages} = state;
  
  console.log(Math.random()*10);
  
  

  return (
    <div className="container mt-4 mb-4 border border-dark">
      <div className="row">
        <div className="col-sm">
          
        </div>
        <div className="col-sm">
          Одна из трёх колонок
        </div>
        <div className="col-sm">
          Одна из трёх колонок
        </div>
      </div>
    </div>
  );
};