import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';


const App = () => {

  const url = '/123/films.json';

  fetch(url)
    .then(data => data.json())
    .then(data => console.log(data))

  


    
    
    
  

  
  return (
    <div>Hello</div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
