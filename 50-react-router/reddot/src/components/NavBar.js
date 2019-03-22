import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <Link to="/">
      <div className="nav-container">
        <img style={{ width: "50px", height: "50px" }} src="https://media.corcoran.com/pdf/neighborhoodphotos/FLATIRON_CORCORAN_07.jpg" alt="reddot" />
        <h1>Reddot</h1>
      </div>
    </Link>
  );
}

export default NavBar;
