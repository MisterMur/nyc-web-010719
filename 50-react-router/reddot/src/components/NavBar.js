import React from 'react';

const NavBar = (props) => {
  return (
    <div className="nav-container" onClick={props.handleLogoClick}>
      <img style={{ width: "50px", height: "50px" }} src="https://media.corcoran.com/pdf/neighborhoodphotos/FLATIRON_CORCORAN_07.jpg" alt="reddot" />
      <h1>Reddot</h1>
    </div>
  );
}

export default NavBar;
