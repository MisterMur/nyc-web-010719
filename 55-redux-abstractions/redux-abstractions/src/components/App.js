import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assets/css/App.css';

// import Header from './Header';
import Counter from './Counter';
import DoubleCounter from './DoubleCounter';
import DecoupleCounter from './DecoupleCounter';
import Evens from './Evens';
import OnlyOverTen from './OnlyOverTen';
import Pizza from './Pizza';
import NameForm from './NameForm';
import NameList from './NameList';

class App extends Component {
  plusPlus = () => {
    this.props.dispatch({ type: "INCREMENT_COUNTER" });
  }

  minusMinus = () => {
    this.props.dispatch({ type: "DECREMENT_COUNTER" });
  }

  render() {
    console.log('%c App render', 'color: red', this.props);

    return (
      <div className="App">
        <button onClick={this.plusPlus}>++</button>
        <button onClick={this.minusMinus}>--</button>

        <Counter/>
        <DoubleCounter/>
        <DecoupleCounter/>
        <Evens/>
        <OnlyOverTen/>
        <hr/>
        <Pizza p={1}/>
        <hr/>
        <NameForm/>
        <NameList/>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   console.log('%c mapStateToProps', 'color: yellow', state);
//
//   return {
//     counter: state.counter,
//     doubleCounter: state.counter * 2,
//     decoupleCounter: state.counter * 10,
//     names: state.names.slice(0, 2), // the first two
//     superPizza: { pizza: state.pizza, price: state.counter }
//   }
// }

export default connect()(App);
