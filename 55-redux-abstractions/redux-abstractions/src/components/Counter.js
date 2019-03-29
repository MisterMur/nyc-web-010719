import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  console.log('Counter', props);
  return <p>{props.counter * props.multiplier}</p>
}


// Philosophy
// all of these abstraction are introducing more layers
// redux has too much boilerplate!
// you're not comfoirtable with thinking in layers
// thinking in whose responsbilty is it?

// Mod 1 => wild with helpers => you can go too far

// right answer? => never a right answer
function mapStateToProps(state, ownProps) {
  console.log('Counter mapStateToProps', state, ownProps);
  return {
    counter: state.counter, //  * ownProps.multiplier optopn 1
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('Counter mapDispatchToProps', ownProps);

  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
