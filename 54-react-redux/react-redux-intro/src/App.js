import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Pizza from './Pizza';
import NameForm from './NameForm'

// draw out the flow of redux / react-redux
// when you dispatch any action

class App extends Component {
  // make changes to state
  handleClick = () => {
    this.props.dispatch({ type: "INCREMENT_COUNTER" })
  }

  // is dispatch rerendering our component?
  render() {
    console.log('App render', this.props);
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click Me!!!!</button>
        <p>{this.props.counter}</p>
        <h1>There is no more trust!!!</h1>
        <p>{this.props.doubleCounter}</p>
        <p>{this.props.decoupleCounter}</p>

        <Pizza />

      <NameForm/>

      {this.props.names.map(name => <p>{name}</p>)}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


// pub-sub
/// we are listening for state changes
// one super nice thing about mapStateToProps
// is that it acts like a Serializer too

// once wqe connnect, we can dispatch
// if we also want to listen for changes
//. we need to tell connect what to listen for
function mapStateToProps(state) {
  console.log('%c mapStateToProps', 'color: yellow', state);
  // maps the state from the store to the props
  return {
    // beef: "curry",
    // keyyyy: "value",
    counter: state.counter,

    // what does this feel like? awwww....
    // Serializer!
    // filter
    doubleCounter: state.counter * 2,
    decoupleCounter: state.counter * 10,
    names: state.names.slice(0, 2), // the first two
    superPizza: { pizza: state.pizza, price: state.counter }
    // pizza: state.pizza,
  }
}

// higher order function => it returns another function or takes one as an arguement or both
// higher order component => function that takes a component returns another compoonbent
const HOC = connect(mapStateToProps)

export default HOC(App);
