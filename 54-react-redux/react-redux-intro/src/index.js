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
function reducer(state = initialState, action) {
  console.log('%c reducer:', 'color: orange', state, action);

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
      return { ...state, counter: action.payload }
    case "RENAME_CAT":
      return { ...state, cat: action.payload }
    case "CHANGE_PIZZA":
      return { ...state, pizza: action.payload }
    default:
      return state;
  }
}

// #2 defining your actions / types
// Add those "routes" to your reducer.

console.log('%c Initial State:', 'color: blue', store.getState());

console.log("%c ====================================", 'color: green');

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
