import React from 'react';
import { connect } from 'react-redux';

const Evans = (props) => {
  const style = {
    color: props.isEven ? 'green' : 'red'
  }

  return <p style={style}>{props.counter}</p>
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    isEven: state.counter % 2 === 0,
  }
}

export default connect(mapStateToProps)(Evans);
