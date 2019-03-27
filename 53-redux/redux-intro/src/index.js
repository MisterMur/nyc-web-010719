import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



import { createStore } from 'redux';

// #1 make a store
const store = createStore(reducer)

// #1a define you initial state
const initialState = {
  counter: 0,
  cat: "Sugar",
  dog: true,
  pizza: "pepperoni"
}

// #1b define your reducer using your intial state
// just javascript
function reducer(state = initialState, action) {
  console.log(state, action);
  // let's set the counter to N
  // you are limiting yourself by having a giant if/else
  // it wants you to think of what kind of actions you can do

  // if this is pure... that menas you can test each of these individually
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 }
    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - 1 }
    case "RENAME_CAT_TO_CINNAMON":
      return { ...state, cat: "Cinnamon" }
    case "DOGGLE":
      return { ...state, dog: !state.dog }
    case "SET_NUMBER":
      return { ...state, counter: action.number }
    case "RENAME_CAT":
      return { ...state, cat: action.name }
    case "CHANGE_PIZZA":
      return { ...state, pizza: action.payload }
    case "@@redux/INITl.x.5.2.x.i":
      return { cat: "omg" }
    default:
      return state;
  }
}

// #2 defining your actions / types

console.log('Initial State: ', store.getState());

console.log("-=======-================================");

store.dispatch({ type: "INCREMENT" }) // this is how you change state
console.log('New State:', store.getState());

store.dispatch({ type: "DECREMENT" }) // this is how you change state
console.log('New State:', store.getState());

store.dispatch({ type: "DOGGLE" })
console.log('New State:', store.getState());

store.dispatch({ type: "SET_NUMBER", number: 10 })
console.log('New State:', store.getState());

store.dispatch({ type: "RENAME_CAT", name: "Oreo" })
console.log('New State:', store.getState());

store.dispatch({ type: "CHANGE_PIZZA", payload: "veggie" })
console.log('New State:', store.getState());


// this is what you;d probably do in Mod 3
console.log('New State:', store.getState().cat);








ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
