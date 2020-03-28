import React from 'react'
import { TageList } from './tage-list'
import { AllTages } from './all-tages'

export const Tages = () => {

  const 

  return (
    <div className="container mt-4 mb-4 p-3 border border-dark">
      {!a? <TageList /> : null}
      {a? <AllTages /> : null }
    </div>
  );
};