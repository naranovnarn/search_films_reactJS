import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import axios from 'axios';

const App = () => {

  const url = '../src/jsons/films.json';

  fetch(url)
    .then(data => console.log(data))

  


    
    
    
  

  
  return (
    <div>Hello</div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
