import React from 'react';
import { NavLink } from 'react-router-dom'



export const Navbar = () => {

  return (
    <header>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className="navbar-brand h1" href="/">Поисковик</div>
        <ul className="navbar-nav ">
          <li className="navbar item">
            <NavLink exact to="/search_films_reactJS/" className="nav-link">Фильмы</NavLink>
          </li>
          <li className="navbar item">
            <NavLink to="/search_films_reactJS/favorites" className="nav-link">Закладки</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};