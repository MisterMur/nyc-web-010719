import React, { Component } from 'react';

// the purpose is if you have shared functionality between components
// rather than abstract, use composition to give that functionality
// to whichever components you want

// let's give the WrappedComponent some random color prop
function withColor(WrappedComponent) {

  // class Soemthing extends Component
  // function Something(props)

  return class extends Component {
    render() {
      console.log('withColor', this.props);
      return <WrappedComponent {...this.props} color={["blue", "orange", "pink"][Math.floor(Math.random()*3)]} />
    }
  }
}
//
// function multiply(factor) {
//   return function(number) {
//     return factor * number;
//   }
// }

export default withColor;
