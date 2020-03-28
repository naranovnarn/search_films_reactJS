import React, { useContext, useState, useEffect, useCallback, useMemo} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const App = () => {

  const url = '../assets/jsons/films.json';

  fetch(url)
    .then((data) =>data.json())
    .then((data) => console.log(data))
    
  

  
  return (
    <div>Hello</div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
