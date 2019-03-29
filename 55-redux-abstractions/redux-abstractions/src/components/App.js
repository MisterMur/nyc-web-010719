import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assets/css/App.css';

// import Header from './Header';
import Counter from './Counter';
import DoubleCounter from './DoubleCounter';
import DecoupleCounter from './DecoupleCounter';
import Evans from './Evans';
import OnlyOverTen from './OnlyOverTen';
import Pizza from './Pizza';
import NameForm from './NameForm';
import NameList from './NameList';

import { incrementCounter, decrementCounter, setNumber } from '../actions';

class App extends Component {
  // has no state

  plusPlus = () => {
    // problem #1
    // let's make this look more like React
    // this.setState()
    // callback
    this.props.incrementCounter();
    // this.props.dispatch(incrementCounter());
  }

  minusMinus = () => {
    this.props.decrementCounter();
    // this.props.dispatch(decrementCounter());
  }

  // mostly to think about how to design your action types
  plusFour = () => {
    // give it a new action => add four
    // INCREMENT_COUNTER + payload => pass in 4
    // fun INCREMENT_COUNTER four times

    // const incrementCounter = { type: INCREMENT_COUNTER };
    // this is where redux gets annoying
                        // action object
    this.props.incrementCounter();
    this.props.incrementCounter();
    this.props.incrementCounter();
    this.props.incrementCounter();

    // then rerender
    // it does "wait" => synchronous
    // it scales pretty well
    // redux is trying to be as smaart as possible
    this.props.setNumber(4);
  }

  render() {
    console.log('%c App render', 'color: red', this.props);

    return (
      <div className="App">
        <button onClick={this.plusPlus}>++</button>
        <button onClick={this.minusMinus}>--</button>
        <button onClick={this.plusFour}>+4</button>

        <Counter multiplier={1} />
        <Counter multiplier={2} />
        <Counter multiplier={10} />
        <Evans/>
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

function mapStateToProps(state) {
  console.log('%c mapStateToProps', 'color: yellow', state);

  return {
    cat: "meow",
    beef: "yuuuum"
    // counter: state.counter,
    // doubleCounter: state.counter * 2,
    // decoupleCounter: state.counter * 10,
    // names: state.names.slice(0, 2), // the first two
    // superPizza: { pizza: state.pizza, price: state.counter }
  }
}

// BindActionCreators
// function mapDispatchToProps(dispatch) {
//   // maps dispatch to props
//   return {
//     // beef: "steak"
//     incrementCounter: () => dispatch(incrementCounter()),
//     decrementCounter: () => dispatch(decrementCounter()),
//     setNumber: (number) => dispatch(setNumber(number))
//   }
// }

// too much??? way too much!
// that's cool, why not?

// when you write and pass in mapDispatchToProps, you lose dispatch
export default connect(mapStateToProps,
  { incrementCounter, decrementCounter, setNumber }
)(App);
