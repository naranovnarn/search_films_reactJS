import React from 'react-dom';

import './films-list.css';



export const FilmsList = () => {

  // const arr = new Array(12).fill('').map( ( _, index) => index)

  // const {getInfo} = useContext(vkContext)
  // const [value, setValue] = useState('')

  const {s}
  

  return (
    <main>
      <div className="container pt-4">
        <div className="row">
          {arr.map(( _, index) => (
            <div className="col-sm-4 mb-4 border border-primary" key={index}>
              {index}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}