import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

const NameList = (props) => {
  return (
    <ul>
      {props.names.map(name => <li key={uuid()}>{name}</li>)}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    names: state.names,
  }
}

export default connect(mapStateToProps)(NameList);
