import animalReducer from './animalReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  animal: animalReducer,
  user: userReducer,
})
