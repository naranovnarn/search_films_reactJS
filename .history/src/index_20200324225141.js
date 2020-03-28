import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const App = () => {

  const url = '../assets/jsons/films.json';

  fetch(url)
    .then((data) => {
      return JSON.stringify(data);
    })
    .then(data => {
      debugger
    })
    .catch(e => {
      debugger
    })
    
    
  

  
  return (
    <div>Hello</div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
