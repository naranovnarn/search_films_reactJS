import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { FilmState } from '../../context/FilmsState';
import { Navbar } from '../navbar/navbar';
import { Main } from '../../pages/main';
import { Favorites } from '../../pages/favorites';


const App = () => {

  console.log('test');
  
  
  return (
    <FilmState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/search_films_reactJS/' component={Main} />
          <Route path='/favorites' component={Favorites} />
        </Switch>
      </BrowserRouter>
    </FilmState>
  );
};

export default App;