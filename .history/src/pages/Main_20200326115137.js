import React from 'react';
import { SearchPanel } from '../components/search-panel/search-panel';
import { FilmsList } from '../components/films-list/films-list';
import { TageList } from '../components/tages/tages';

export const Main = () => {
  return (
    <div>
      <SearchPanel />
      <TageList/>
      <FilmsList />
    </div>
  )
}