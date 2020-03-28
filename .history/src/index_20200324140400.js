import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';




const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () => {

  const [color, setColor] = useState('blue')

  return (
    <div style={{padding: 10, background: color}}>
      <button onClick={()=>{setColor('brown')}}>Dark</button>
      <button onClick={()=>{'blue'}}>Light</button>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
