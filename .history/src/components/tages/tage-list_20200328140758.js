import React, { useContext } from 'react';
import { filmsContext } from '../../context/filmsContext';

export const TageList = () => {

  const {state, getFilmByTage, getAllTages} = useContext(filmsContext);
  const {tages} = state;

    return (
        <div className="row">
          <div className="col-4" >
            <button 
              className="btn btn-secondary" 
              onClick={() => getFilmByTage(tages[0])}
              data-placement="top" title={tages[0]}
            >
              {tages[0]}</button>
          </div>
          <div className="col-4" >
            <button 
              className="btn btn-secondary" 
              onClick={() => getFilmByTage(tages[1])} 
              data-placement="top" title={tages[1]}
            >
              {tages[1]}</button>
          </div>
          <div className="col-4">
            <button 
              type="button"
              className="btn btn-primary" 
              onClick={() => getAllTages()} 
              data-placement="top" title="Показать все теги"
            >
              Показать все теги</button>
          </div>
        </div>
    );
  };


