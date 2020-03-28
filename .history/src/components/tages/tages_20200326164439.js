import React from 'react'
import { TageList } from './tage-list'
import { AllTages } from './all-tages'

export const Tages = () => {

  return (
    <div className="container mt-4 mb-4 border border-dark">
      <TageList />
      <AllTages />
    </div>
  );
};