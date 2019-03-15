import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';

// div vs fragment
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
      </Fragment>
    );
  }
}

export default App;
