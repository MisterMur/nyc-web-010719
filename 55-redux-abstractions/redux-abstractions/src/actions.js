import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_NUMBER } from './types';

// action creators

export function setNumber(number) {
  return { type: SET_NUMBER, payload: number }
}

export function incrementCounter() {
  return { type: INCREMENT_COUNTER }
}

export function decrementCounter() {
  return { type: DECREMENT_COUNTER }
}
