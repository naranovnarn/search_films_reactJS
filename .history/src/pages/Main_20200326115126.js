import React from 'react';
import { SearchPanel } from '../components/search-panel/search-panel';
import { FilmsList } from '../components/films-list/films-list';
import { TagesList } from '../components/tages/tages';

export const Main = () => {
  return (
    <div>
      <SearchPanel />
      <TagesList/>
      <FilmsList />
    </div>
  )
}