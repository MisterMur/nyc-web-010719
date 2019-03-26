import React, { Component } from 'react';

// this HOC will help me with componentDidMount
// show a loading spinner so i dont see a blank page to start

// think single responsibility principle
function withLoading(WrappedComponent, loadData) {
  return class extends Component {
    state = {
      isLoaded: false,
      data: null,
    }

    componentDidMount() {
      // fetch
      console.log(loadData);
      loadData
        .then(res => res.json())
        .then(data => {
          this.setState({ data, isLoaded: true });
        })
    }

    render() {
      if (this.state.isLoaded) { // if the data is loaded, render the actual component
        return <WrappedComponent {...this.props} initialData={this.state.data} />
      } else { // else render a spinner
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      }

    }
  }
}

export default withLoading;
