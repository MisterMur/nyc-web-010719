import UUID from 'uuid';
import { ADD_USER, UPDATE_ANIMAL } from './types';
import AnimalAdapter from './apis/AnimalAdapter';

export function addUser(name, email, animalPreference) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email, animalPreference }
  }
}

export function updateAnimal(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}

// this is much more reusable
// it also keeps the fetch logic next to the action we want to make
export function fetchDog() {
  // does that seem cool? ehhhh
  return function(dispatch) {
    // if function , then invoke it and give it dispatch
    console.log('that is weird', dispatch);
    dispatch({ type: 'HEY_FETCHING_YO' });
    AnimalAdapter.getDog()
      .then(url => {
        // render it => update our state in redux => dispatch
        // this.props.updateAnimal(url);
        dispatch(updateAnimal(url))
        dispatch({ type: 'HEY_FETCHED_THAT_DOG' });
        // this.setState({ url });


        // // why won;'t it work?'
        // return {
        //   type: UPDATE_ANIMAL,
        //   payload: url,
        // }
      })
  }

  // AnimalAdapter.getDog()
  //   .then(url => {
  //     // render it => update our state in redux => dispatch
  //     // this.props.updateAnimal(url);
  //     // dispatch(updateAnimal(url))
  //     // this.setState({ url });
  //
  //
  //     // why won;'t it work?'
  //     return {
  //       type: UPDATE_ANIMAL,
  //       payload: url,
  //     }
  //   })
}
