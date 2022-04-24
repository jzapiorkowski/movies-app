import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './header.scss';

export function Header() {
  return (
    <header>
      <NavLink to='/' className='logo'>
        MOVIES APP
      </NavLink>
      <nav>
        <NavLink to='/add-movie'>ADD A MOVIE</NavLink>
        <Outlet></Outlet>
      </nav>
    </header>
  );
}
