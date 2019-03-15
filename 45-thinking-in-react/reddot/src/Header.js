import React from 'react';
import NavBar from './NavBar';
import Search from './Search';

// quiz for yout html knowledge
const Header = (props) => {
  return (
    <header className="border">
      <NavBar />
      <Search />
    </header>
  );
}

export default Header;
