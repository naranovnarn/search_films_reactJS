import React from 'react'
import { TageList } from './tage-list'
import { AllTages } from './all-tages'

export const Tages = () => {

  const a = false;

  return (
    <div className="container mt-4 mb-10 border border-dark">
      {!a? <TageList /> : null}
      {a? <AllTages /> : null }
    </div>
  );
};