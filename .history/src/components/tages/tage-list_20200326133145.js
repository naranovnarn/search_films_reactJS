import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';

export const TageList = () => {

  const {state} = useContext(filmsContext);
  const {tages} = state;
  
  
  if (Number.isInteger((getRandomTages(0, tages.length)))) {
    const num = getRandomTages(0, tages.length);
    return (
      <div className="container mt-4 mb-4 border border-dark">
        <div className="row">
          <div className="col-sm">
            {num}
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
  }



  
};

function getRandomTages(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}