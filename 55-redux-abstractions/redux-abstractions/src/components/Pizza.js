import React from 'react';
import { connect } from 'react-redux';

const Pizza = props => {
  console.log('Pizza', props);
  return (
    <div>
      <h1>{props.pizza} pizza</h1>
      <p>Orders: {props.order}</p>
      <p>Double Orders: {props.doubleOrders}</p>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('Pizza mapStateToProps', state);

  return {
    pizza: state.pizza,
    order: state.counter,
    doubleOrders: state.counter * 2,
  }
}

export default connect(mapStateToProps)(Pizza);
