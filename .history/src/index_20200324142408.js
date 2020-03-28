import React, { useContext} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';


const MyContext = React.createContext(;)

const App = () => {
  return (
    <MyContext value='Hello world 123'>
      <Child />
    </MyContext>
  );
};

const HookSwitcher = () => {

  const [color, setColor] = useState('blue');
  const [fontSize, setFontSize] = useState(25);

  return (
    <div style={{padding: 10, 
      background: color, 
      fontSize: `${fontSize}px` }}>
      <p>Hello world</p>
      <button onClick={() => setColor('brown')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize( (s) => s + 2)}>Увеличить шрифт</button>
      <button onClick={() => setFontSize( (s) => s - 2)}>Уменьшить фшрифт</button>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
