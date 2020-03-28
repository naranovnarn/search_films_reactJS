import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';

export const TageList = () => {

  const {state, getFilmByTage, getAllTages} = useContext(filmsContext);
  const {tages} = state;

  console.log(tages);
  
  

    return (
        <div className="row">
          <div className="col-sm" >
            <button className="btn btn-secondary" onClick={() => getFilmByTage(tages[0])}>{tages[0]}</button>
          </div>
          <div className="col-sm" >
            <button className="btn btn-secondary" onClick={() => getFilmByTage(tages[1])}>{tages[1]}</button>
          </div>
          <div className="col-sm">
            <button className="btn btn-primary" onClick={() => getAllTages()}>Теги</button>
          </div>
        </div>
    );
  }


