import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';




const App = () => {
  return (
    <h1>Hello world</h1>
  );
};

const HookSwitcher = () => {
  return (
    <div style={{padding: 10, background: 'white'}}>
      <button onClick={()=>{}}>Dark</button>
      <button onClick={()=>{}}>Light</button>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
