import React from 'react';

import './App.css'
import { FilmState } from '../../context/FilmsState';
import { SearchPanel } from '../search-panel/search-panel';
import { Test } from '../test1/test1';



const App = () => {

  // const url = './jsons/films.json';

  // fetch(url)
  //   .then(data => data.json())
  //   .then(data => console.log(data))
  
  return (
    <FilmState>
      <SearchPanel />
    </FilmState>
  );
};

export default App;