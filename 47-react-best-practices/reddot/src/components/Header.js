import React from 'react';

import NavBar from './NavBar';
import Search from './Search';

// destructuring
const Header = ({ goToHomePage = "some value" }) => {
  return (
    <header className="border">
      <NavBar handleLogoClick={goToHomePage}/>
      <Search />
    </header>
  );
}

export default Header;
