import React, { Component, Fragment } from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

class App extends Component {
  handleClick = () => {
    this.setState({})
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate');
  }

  render() {
    console.log("App");
    return (
      <Fragment>
        <button onClick={this.handleClick}>Click Me</button>
        <ClassComponent name="great grandparent" color="blue">
          <ClassComponent name="cool grandparent" />
          <ClassComponent name="grandparent">
            <ClassComponent name="parent">
              <ClassComponent name="child">
                <ClassComponent name="grand child" />
                <ClassComponent name="second favorite grand child" />
                <FunctionalComponent name="app functional" />
              </ClassComponent>
            </ClassComponent>
          </ClassComponent>
        </ClassComponent>
      </Fragment>
    );
  }
}

export default App;
