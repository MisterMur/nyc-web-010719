import React from 'react';
import { connect } from 'react-redux';

const OnlyOverTen = (props) => {
  if (props.renderMe) {
    return <p style={{ color: 'orange' }}>{props.chicken}</p>
  } else {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    chicken: state.counter,
    renderMe: state.counter > 10,
  }
}

export default connect(mapStateToProps)(OnlyOverTen);
