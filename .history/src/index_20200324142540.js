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

const Child = () => {

  const value = useContext(MyContext)

  return (
    <p>{value}</p>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
