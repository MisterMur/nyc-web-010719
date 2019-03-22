import React from 'react';

const Logout = (props) => {
  const handleLogout = (event) => {
    localStorage.removeItem('fake_session');
    // go somewhere?
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
