import React from 'react-dom';

import './navbar.css';

export const Navbar = () => {

<header>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className="navbar-brand ">Naranov</div>
          <ul className="navbar-nav ">
            <li className="navbar item">
              <NavLink exact to="/" className="nav-link">ссылка 1</NavLink>
            </li>
            <li className="navbar item">
              <NavLink to="/about" className="nav-link"> ссылка 2</NavLink>
            </li>
          </ul>
      </nav>
    </header>

}