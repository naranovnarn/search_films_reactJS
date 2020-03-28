import React from 'react';

import './App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { FilmState } from '../../context/FilmsState';
import { Navbar } from '../navbar/navbar';



const App = () => {
  
  return (
    <FilmState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route 
        </Switch>
      </BrowserRouter>
    </FilmState>
  );
};

export default App;