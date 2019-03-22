import React, { Component } from 'react';

import ReddotAdapter from '../apis/ReddotAdapter';

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  }

  handleLogin = (event) => {
    event.preventDefault();

    // TODO: Real Auth, Real Fetch
    ReddotAdapter.login(this.state.username, this.state.password)
      .then(res => res.json())
      .then(user => {
        localStorage.setItem('fake_session', user.id);
        this.setState({ username: "", password: "" });
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { username, password } = this.state;

    return (
      <form className="login-form" onSubmit={this.handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;
