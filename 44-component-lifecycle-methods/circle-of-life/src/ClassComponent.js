import React, { Component } from 'react';
import FunctionalComponent from './FunctionalComponent';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    console.log("ClassComponent constructor", this.props.name);
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    console.log("%c ClassComponent getDerivedStateFromProps", "color: pink", props.name);

    return null;
  }

  // // OPTIMIZE:
  shouldComponentUpdate(nextProps, nextState) {
    console.log("%c ClassComponent shouldComponentUpdate", "color: pink", this.props.name);

    return false;
  }


  // dom content loaded
  // fetch( some data to render ) => once the dom is there
  componentDidMount() {
    console.log("%c ClassComponent componentDidMount", "color: orange", this.props.name);
  }

  componentDidUpdate() {
    console.log("%c ClassComponent componentDidUpdate", "color: red", this.props.name);
  }

  handleClick = () => {
    this.setState({})
  }

  render() {
    console.log("%c ClassComponent render", "color: blue", this.props.name);
    const { name, color, children } = this.props; // destructuring

    return (
      <div style={{ border: `1px solid ${color}`, margin: 10, textAlign: 'center' }}>
        <button onClick={this.handleClick}>Click Me {name}</button>
        <p style={{ color }}>{name}</p>
        {children}
        <FunctionalComponent name="functional" />
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  color: 'black'
}

export default ClassComponent;
