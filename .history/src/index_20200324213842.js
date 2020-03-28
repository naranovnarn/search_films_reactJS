import React, { useContext, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const App = () => {
  const [value, setValue] = useState(1);
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
        <PlanetInfo id={value} />
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
  
  const data = usePlanetInfo(id);

  return (
    <div>{id} - {data && data.name}</div>
  );
}

const usePlanetInfo = (id) => {
  const request = () => getPanet(id);
  return useRequest(request);
}

const getPanet = (id) => {
  return  fetch(`https://swapi.co/api/planets/${id}/`)
      .then(res => res.json())
      .then(data => data);
}

const useRequest = (request) => {
  const [dataState, setdataState] = useState(null);

  useEffect( () =>{
    let cancelled = false;
    request()
      .then(data => !cancelled && setdataState(data));
    return () => cancelled = true;
    }, [id]);

    return dataState;
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
