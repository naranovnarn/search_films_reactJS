import react from 'react';

import './search-panel.css';

const SearchPanel = () => {


  return (
    <div>
    <input type='text'
      className='form-control search-input'
      placeholder='Введите название фильма'
    />
    </div>
  );
};

export default SearchPanel;