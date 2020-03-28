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

  const [color, setColor] = useState('blue');
  const [fontSize, setFontSize] = useState(25);

  return (
    <div style={{padding: 10, 
      background: color, 
      fontSize: fontSize}}>
      <p>Hello world</p>
      <button onClick={() => setColor('brown')}>Dark</button>
      <button onClick={() => setColor('blue')}>Light</button>
      <button onClick={() => setFontSize( (s) => s + 2)}>Увеличить шрифт</button>
      <button onClick={() => setColor('blue')}>Уменьшить фшрифт</button>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
