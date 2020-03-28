import React from 'react';

import './App.css'
import { FilmState } from '../../context/FilmsState';
import { SearchPanel } from '../search-panel/search-panel';
import { FilmsList } from '../films-list/films-list';



const App = () => {
  
  return (
    <FilmState>
      <SearchPanel />
      <FilmsList />
    </FilmState>
  );
};

export default App;