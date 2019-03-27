import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

// learn how to create that magical store!

const store = createStore(reducer)

// pure function => very very very pure
// on it's first run when you createStore,
// it will run the reducer function once
// when I invoke you, I will give you no argument for state
// I will also give you a "nonsense" argument for action

const initialState = {
  counter: 0,
  cat: "Sugar",
  dog: true
}
// doesn't that mean the state needs to have unique keys for everything?
// why yes!
//. isn't that annoying?
// oh yes!!! => combineReducers

                //. defaulting is my initial state
function reducer(state = initialState, action) {
  //. reducer => to reduce => .reduce()
  // .inject => .reduce
  // takes one input => consolidates it to an output
  // console.log('#1', state, action);

  //. get state as input => returning the new state

  // what do you think needs to be written to change state?

  // what the reducer is always supposed to return
  // is the "new" state
  // state.dog = false; // OMG!!! it's read-only!!!
  if (action.type === "what") { // not the initial run
  //. this type helps us decide what happens
  // if (!state) {
    console.log('what up yo', state);
    let copyOfState = { ...state }
    console.log('really copied?', copyOfState);
    copyOfState.dog = false;
    console.log('really changed?', copyOfState);
    return copyOfState;
  } else if (action.type === "INCREMENT") { // different types of actions
    let copyOfState = { ...state }
    copyOfState.counter++
    return copyOfState
  } else if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - 1 }
  } else if (action.type === "RENAME_CAT") {
    return { cat: "Cinnamon" } // what happens to state?
  } else if (action.type === "DOGGLE") {
    return { ...state, dog: !state.dog }
  }
  // 1. increment a counter
  // 2. decrement a counter
  // 3. rename sugar to cinnamon
  // 4. toggle the dog
  // 5. set the counter to N


  // switch (action.type) {
  //   case "INCREMENT":
  //
  //     break;
  //   default:
  //
  // }

}

console.log('#2', store);

console.log('#3', store.getState());

// setState == this is how you will setState
// POJO => plain old javascript object
console.log("before dispatch");
store.dispatch({ type: "what" }) // this is how you change state
console.log("after dispatch");

console.log('#4', store.getState());

console.log("-=======-================================");

store.dispatch({ type: "INCREMENT" }) // this is how you change state
console.log('#4', store.getState());

store.dispatch({ type: "DECREMENT" }) // this is how you change state
console.log('#4', store.getState());

// store.dispatch({ type: "RENAME_CAT" }) // this is how you change state
// console.log('#4', store.getState());

// dispatch is your new setState => reruns render, callback because... async
store.dispatch({ type: "DOGGLE" })
console.log('#4', store.getState());

// is this async? not async! but.,,, it gets a bit tricky on friday
store.dispatch({ type: "DOGGLE" })
console.log('#4', store.getState());
store.dispatch({ type: "DOGGLE" })
console.log('#4', store.getState());
store.dispatch({ type: "DOGGLE" })
console.log('#4', store.getState());
store.dispatch({ type: "DOGGLE" })
console.log('#4', store.getState());
store.dispatch({ type: "DOGGLE" })
console.log('#4', store.getState());
store.dispatch({ type: "DOGGLE" })
console.log('#4', store.getState());
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
