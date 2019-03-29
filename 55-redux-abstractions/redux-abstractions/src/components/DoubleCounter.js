import React from 'react';
import { connect } from 'react-redux';

const DoubleCounter = (props) => {
  return <p>{props.counter}</p>
}

function mapStateToProps(state) {
  return {
    counter: state.counter * 2,
  }
}

export default connect(mapStateToProps)(DoubleCounter);
