import React from 'react';

import './navbar.css';

export const Navbar = () => {
  <header>
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <ul className="navbar-nav ">
        <li className="navbar item">
          <NavLink exact to="/" className="nav-link">Фильмы</NavLink>
        </li>
        <li className="navbar item">
          <NavLink to="/about" className="nav-link">Закладки</NavLink>
        </li>
      </ul>
    </nav>
  </header>
}