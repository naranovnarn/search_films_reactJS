import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';




const App = () => {
  return (
    <h1>Hello world</h1>
  );
};



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
