import React from 'react';

import './App.css'
import { FilmState } from '../../context/FilmsState';
import { SearchPanel } from '../search-panel/search-panel';
import { FilmsList } from '../films-list/films-list';
import { Navbar } from '../navbar/navbar';



const App = () => {
  
  return (
    <FilmState>
      <Navbar />
      <SearchPanel />
      <FilmsList />
    </FilmState>
  );
};

export default App;