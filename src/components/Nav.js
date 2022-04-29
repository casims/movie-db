import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ handleShowHideNav }) => {
  function closeNav(e) {
    if (window.innerWidth < 600) {
      handleShowHideNav();
    } else {
      e.target.blur();
    }
  }
  return (
    <nav className="main-nav" onClick={closeNav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
      <span className="menu-divider"></span>
      <ul>
        <li className="nav-sort">
          <NavLink to="/sort/popular">Popular</NavLink>
        </li>
        <li className="nav-sort">
          <NavLink to="/sort/top-rated">Top Rated</NavLink>
        </li>
        <li className="nav-sort">
          <NavLink to="/sort/upcoming">Upcoming</NavLink>
        </li>
        <li className="nav-sort">
          <NavLink to="/sort/now-playing">Now Playing</NavLink>
        </li>
      </ul>
      <span className="menu-divider"></span>
    </nav>
  );
};

export default Nav;
