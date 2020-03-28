import React, { useContext } from 'react'
import { TageList } from './tage-list'
import { AllTages } from './all-tages'
import { filmsContext } from '../../context/filmsContext';

export const Tages = () => {

  const {state} = useContext(filmsContext);

  const {toogleOpen} = state;

  console.log(toogleOpen);
  

  return (
    <div className="container mt-4 mb-4 p-3">
      {!toogleOpen? <TageList /> : null}
      {toogleOpen? <AllTages /> : null }
    </div>
  );
};