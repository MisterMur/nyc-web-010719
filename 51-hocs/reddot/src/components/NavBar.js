import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
  <div className="nav-container">
    <Link to="/">
      <img
        style={{ width: "50px", height: "50px" }}
        src="https://media.corcoran.com/pdf/neighborhoodphotos/FLATIRON_CORCORAN_07.jpg"
        alt="reddot"
      />
    </Link>
    <Link to="/"><h1>Reddot</h1></Link>
    <Link to="/profile">Profile</Link>
  </div>
);

export default NavBar;
