import React from 'react';

import NavBar from './NavBar';
import Search from './Search';
import LoginForm from './LoginForm';
import Logout from './Logout';

const Header = (props) => (
  <header className="border">
    <NavBar />
    <Search />
    <LoginForm />
    <Logout />
  </header>
);

export default Header;
