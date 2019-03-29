import { INCREMENT_COUNTER, DECREMENT_COUNTER, RENAME_CAT_TO_CINNAMON, SET_NUMBER } from './types';
// import * as constants from './types';

// console.log(constants);

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
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 }
    case RENAME_CAT_TO_CINNAMON:
      return { ...state, cat: "Cinnamon" }
    case "DOGGLE":
      return { ...state, dog: !state.dog }
    case SET_NUMBER:
      return { ...state, counter: action.payload }
    case "RENAME_CAT":
      return { ...state, cat: action.payload }
    case "CHANGE_PIZZA":
      return { ...state, pizza: action.payload }
    case "ADD_NAME":
      return { ...state, names: [...state.names, action.payload] }
    default:
      // console.log('default case', state);
      return state;
  }
}

export default reducer;
