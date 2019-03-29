import React from 'react';
import { connect } from 'react-redux';

class NameForm extends React.Component {
  state = { name: "" } // because no one else cares about this

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "ADD_NAME", payload: this.state.name });
    this.setState({ name: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <input type="submit" value="NAME!"/>
      </form>
    )
  }
}

export default connect()(NameForm);
