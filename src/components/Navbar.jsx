import React from 'react';
import Home from '../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <img src={Home} alt="home" />
      </Link>
    </div>
  );
};

export default Navbar;
