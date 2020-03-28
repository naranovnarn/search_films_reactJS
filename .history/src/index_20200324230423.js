import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Axios from 'axios';

const App = () => {

  const url = '../src/jsons/films.json';

  const res = Axios.get(url).then(data => data.json())

  console.log(res);
  


    
    
    
  

  
  return (
    <div>Hello</div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
