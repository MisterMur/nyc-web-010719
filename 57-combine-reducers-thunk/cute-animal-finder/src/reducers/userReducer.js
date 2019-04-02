import { ADD_USER } from '../types';

const initialUserState = {
  users: [],
  name: "key here"
};

export default function userReducer(state = initialUserState, action) {
  console.log('userReducer');
  switch(action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
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
