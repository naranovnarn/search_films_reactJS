import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';

export const TageList = () => {

  const {state, getFilms} = useContext(filmsContext);
  const {tages} = state;
  
  
  if (Number.isInteger((getRandomTages(0, tages.length)))) {

    const num1 = getRandomTages(0, tages.length);
    const num2 = getRandomTages(0, tages.length);
    
    return (
      <div className="container mt-4 mb-4 border border-dark">
        <div className="row">
          <div className="col-sm" >
            <button onClick={() => getFilm(tages[num1])}>{tages[num1]}</button>
          </div>
          <div className="col-sm" onClick={getFilmsByTage(tages[num2])}>
            <button onClick={() => getFilm(tages[num2])}>{tages[num2]}</button>
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