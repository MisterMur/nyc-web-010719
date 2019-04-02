import { UPDATE_ANIMAL } from '../types';

const initialAnimalState = {
  animalSrc: null,
  isFetching: true,
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
    case "HEY_FETCHING_YO":
      return {...state, isFetching: true }
    case "HEY_FETCHED_THAT_DOG":
      return {...state, isFetching: false }
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

export default animalReducer;
