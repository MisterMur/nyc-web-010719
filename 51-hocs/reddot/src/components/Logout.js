import React from 'react';
import { withRouter } from 'react-router-dom';

const Logout = (props) => {
  const handleLogout = (event) => {
    localStorage.removeItem('fake_session');
    // go somewhere?
    console.log('Logout', props);
    props.history.push("/");
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default withRouter(Logout);
