import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/index.css';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  counter: 0,
  cat: "Sugar",
  dog: true,
  pizza: "pepperoni",
  names: [],
}

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
    case "ADD_NAME":
      return { ...state, names: [...state.names, action.payload] }
    default:
      console.log('default case', state);
      return state;
  }
}

const store = createStore(reducer);

// const addLoggingToDispatch = (store) => {
//   const rawDispatch = store.dispatch;
//   return (action) => {
//     console.group("DISPATCH");
//     console.log('%c state before dispatch', 'color: red', store.getState());
//     const returnValue = rawDispatch(action);
//     console.log('%c state after dispatch', 'color: blue', store.getState());
//     console.groupEnd();
//     return returnValue;
//   }
// }
// store.dispatch = addLoggingToDispatch(store);

console.log('%c Initial State:', 'color: blue', store.getState());

console.log("%c ====================================", 'color: green');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
