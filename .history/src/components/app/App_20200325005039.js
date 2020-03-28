import React from 'react';

import './App.css'
import { SearchPanel } from '../search-panel/search-panel';
import { FilmState } from '../../context/FilmsState';

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