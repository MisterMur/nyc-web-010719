import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  return <p>{props.counter}</p>
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(Counter);
