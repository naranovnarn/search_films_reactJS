import React from 'react';
import { NavLink } from 'react-router-dom'

import './navbar.css';

export const Navbar = () => {

  return (
    <header>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a className="navbar-brand h1" href="#">Поисковик</a>
        <ul className="navbar-nav ">
          <li className="navbar item">
            <NavLink exact to="/" className="nav-link">Фильмы</NavLink>
          </li>
          <li className="navbar item">
            <NavLink to="/favorites" className="nav-link">Закладки</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};