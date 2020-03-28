import React from 'react'
import { TageList } from './tage-list'
import { AllTages } from './all-tages'

export const Tages = () => {

  const a = true;

  return (
    <div className="container mt-4 mb-4 border border-dark">
      {a? <TageList /> : null}
      <AllTages />
    </div>
  );
};