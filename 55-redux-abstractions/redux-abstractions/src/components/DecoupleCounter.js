import React from 'react';
import { connect } from 'react-redux';

const DecoupleCounter = (props) => {
  return <p>{props.counter}</p>
}

function mapStateToProps(state) {
  return {
    counter: state.counter * 10,
  }
}

export default connect(mapStateToProps)(DecoupleCounter);
