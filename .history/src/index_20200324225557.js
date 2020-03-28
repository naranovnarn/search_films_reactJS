import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const App = () => {

  const url = '../assets/jsons/films.json';

  fetch(url, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
    
    
    
  

  
  return (
    <div>Hello</div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
