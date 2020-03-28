import React, { useContext } from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';



export const FilmsList = () => {

  // const arr = new Array(12).fill('').map( ( _, index) => index)

  // const {getInfo} = useContext(vkContext)
  // const [value, setValue] = useState('')

  const {state} = useContext(filmsContext);

  console.log(state.films.slice(0,5))
  
 

  return (
    <main>
      {/* <div className="container pt-4">
        <div className="row">
          {state.map((film, index) => (
            <div className="col-sm-4 mb-4 border border-primary" key={index}>
              {film.title}
            </div>
          ))}
        </div>
      </div> */}
    </main>
  )
}