import React from 'react';

const Clock = ({ milliseconds, accuracy = 2 }) => {
  console.log('render', (milliseconds / 1000).toFixed(accuracy));
  return (
    <h1>{(milliseconds / 1000).toFixed(accuracy)}</h1>
  )
}

// class Clock extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     let prevTime = (this.props.milliseconds / 1000).toFixed(this.props.accuracy);
//     let nextTime = (nextProps.milliseconds / 1000).toFixed(nextProps.accuracy);
//     return prevTime !== nextTime;
//   }
//
//   render() {
//     let { milliseconds, accuracy } = this.props;
//     console.log('render', (milliseconds / 1000).toFixed(accuracy));
//
//     return (
//       <h1>{(milliseconds / 1000).toFixed(accuracy)}</h1>
//     )
//   }
// }
//
// Clock.defaultProps = {
//   accuracy: 2,
// }

export default Clock;
