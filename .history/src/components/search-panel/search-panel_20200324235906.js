import react from 'react';

import './search-panel.css';

const SearchPanel = () => {


  return (
    <input type='text'
      className='form-control search-input'
      placeholder='Введите название фильма'
    />
  );
};

export default SearchPanel;