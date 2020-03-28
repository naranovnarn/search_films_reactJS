import React from 'react';

import './App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { FilmState } from '../../context/FilmsState';
import { SearchPanel } from '../search-panel/search-panel';
import { FilmsList } from '../films-list/films-list';
import { Navbar } from '../navbar/navbar';



const App = () => {
  
  return (
    <FilmState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <SearchPanel />
          <FilmsList />
        </Switch>
      </BrowserRouter>
    </FilmState>
  );
};

export default App;