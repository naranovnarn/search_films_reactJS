import React, { useContext, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button
          onClick={() => setValue((value) => value + 1)}
        >
        +</button>
        <button
          onClick={() => setVisible((vis) => !vis)}
        >
        hide</button>
        <PlanetInfo />
      </div>
    );
  } else {
    return <button onClick={() => setVisible((vis) => !vis)}>
      show
    </button>
  }
}

const HookCounter = ({value}) =>{

  useEffect(() => {
    console.log('mount');
    return () => console.log('Delete');
  }, []);
    
  useEffect(() => console.log('update'));

  return (
    <p>{value}</p>
  );
}

const Notification = () => {

  const [visible, setVisible] = useState(true);

  useEffect( () => {
    const timeOut = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timeOut)
  }, []);
 

  return (
    <div>
      { visible && <p>Hello</p>}
    </div>
  )
}

const PlanetInfo = ( {id} ) => {

  return (
    <div>{id} - Planet Name</div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
