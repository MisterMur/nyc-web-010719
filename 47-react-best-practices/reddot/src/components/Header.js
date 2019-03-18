import React from 'react';

import NavBar from './NavBar';
import Search from './Search';

const Header = (props) => {
  return (
    <header className="border">
      <NavBar handleLogoClick={props.goToHomePage}/>
      <Search />
    </header>
  );
}

export default Header;
