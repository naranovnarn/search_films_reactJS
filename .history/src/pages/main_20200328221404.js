import React, { useContext } from 'react';
import { SearchPanel } from '../components/search-panel/search-panel';
import { FilmsList } from '../components/films-list/films-list';
import { Tages } from '../components/tages/tages';
import { Pagionation } from '../components/pagination/pagination';
import { filmsContext } from '../context/filmsContext';


export const Main = () => {

  const { state } = useContext(filmsContext)

  const {films, countItem} = state;

  return (
    <div>
      <SearchPanel />
      <Tages />
      <FilmsList />
      {(films.length > countItem) ? <Pagionation/> : null}
    </div>
  )
}