import React, { useContext} from 'react';

import './films-list.css';
import { filmsContext } from '../../context/filmsContext';



export const FilmsList = () => {

  // const [films, setFilms] = useState();

  // const arr = new Array(12).fill('').map( ( _, index) => index)

  // const {getInfo} = useContext(vkContext)
  // const [value, setValue] = useState('')

  const {state} = useContext(filmsContext);

  if (state.films.length > 0) {
    const films = state.films.slice(0,15);
    return (
      <main>
        <div className="container pt-4">
          <div className="row">
            {films.map((film, index) => (
              <div className="col-sm-12 mb-4 border border-primary" key={index}>
                {film.title}
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  } else {
    return null
  }

}