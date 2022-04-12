import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav>
        <NavLink to='/'>Movies app</NavLink>
        <div>
          <NavLink to='/add-movie'>Add a movie</NavLink>
        </div>
        <Outlet></Outlet>
      </nav>
    </header>
  );
}
