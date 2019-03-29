import { createStore } from 'redux';
import reducer from './reducer';

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


export default store;
