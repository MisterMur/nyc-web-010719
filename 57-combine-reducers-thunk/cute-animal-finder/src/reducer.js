import { ADD_USER, UPDATE_ANIMAL } from './types';
import { combineReducers } from 'redux';

const initialAnimalState = {
  animalSrc: null,
  name: ""
};

// how do you think it finds the right one?
// unique types?
// iterate

//. only to concern itself with the animal state
function animalReducer(state = initialAnimalState, action) {
  console.log('animalReducer');
  switch(action.type) {
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };

    // case CLEAR_ANIMAL:
    //   return
    // case FAVORITE_ANIMAL:
    // case SHARE_ANIMAL:
    case "RESET":
      return initialAnimalState;
    default:
      return state;
  }
}

const initialUserState = {
  users: [],
  name: "key here"
};

function userReducer(state = initialUserState, action) {
  console.log('userReducer');
  switch(action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };
    case "RESET":
      return initialUserState;
    // more things to do!
    // add a url
    // remove it
    // save interval
    // share it!
    // very confusing

    // case FILTER
    //
    // case DISABLE_USER // cannot do on facebook
    //
    // case SWITCH_LOYALTIES
    // case SEARCH


    default:
      return state;
  }
}

export default combineReducers({
  animal: animalReducer,
  user: userReducer,
})
