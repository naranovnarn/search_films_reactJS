import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';

export const TageList = () => {

  const {state, getFilmByTage, getAllTages} = useContext(filmsContext);
  const {tages} = state;
  
  if (Number.isInteger((getRandomTages(0, tages.length - 1)))) {

    const num1 = getRandomTages(0, tages.length - 1);
    const num2 = getRandomTages(0, tages.length - 1);

    return (
        <div className="row">
          <div className="col-sm" >
            <button className="btn btn-secondary btn-sm" onClick={() => getFilmByTage(tages[num1])}>{tages[num1]}</button>
          </div>
          <div className="col-sm" >
            <button className="btn btn-secondary btn-sm" onClick={() => getFilmByTage(tages[num2])}>{tages[num2]}</button>
          </div>
          <div className="col-sm">
            <button className="btn btn-success " onClick={() => getAllTages()}>Теги</button>
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