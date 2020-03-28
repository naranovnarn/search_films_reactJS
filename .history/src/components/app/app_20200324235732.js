import React from 'react';

import './app.css'

const App = () => {

  const url = './jsons/films.json';

  fetch(url)
    .then(data => data.json())
    .then(data => console.log(data))




  
  return (
    <div>Hello</div>
  );
};

export default App;