Can you inherit state from App?
- yes, kinda <== usally you never inherit state
- this is trying to solve the problem of sharing state


// takes an object, merges that object into state, then it rerenders

              // that's the most current previous state
              // prevState
console.log('what is state before', this.state.counter);
this.setState(state => {
  // console.log('inside setState', state, props);
  return { counter: state.counter + 1}
}, () => {
  console.log('really after setState', this.state.counter);
})
  // .then(console.log);
console.log('what is state after', this.state.counter);
this.setState((state, props) => {
  return { counter: state.counter + 1}
});
this.setState((state, props) => {
  return { counter: state.counter + 1}
});
this.setState((state, props) => {
  return { counter: state.counter + 1}
});
this.setState((state, props) => {
  return { counter: state.counter + 1}
});
this.setState((state, props) => {
  return { counter: state.counter + 1}
});
this.setState((state, props) => {
  return { counter: state.counter + 1}
});
this.setState((state, props) => {
  return { counter: state.counter + 1}
});
this.setState((state, props) => {
  return { counter: state.counter + 1}
});
this.setState((state, props) => {
  return { counter: state.counter + 1}
});

// wait, i ++ed 10 times
// does this seem strange to you?
// this.setState({ counter: this.state.counter + 1});
// this.setState({ counter: this.state.counter + 1});
// this.setState({ counter: this.state.counter + 1});
// this.setState({ counter: this.state.counter + 1});
// this.setState({ counter: this.state.counter + 1});
// this.setState({ counter: this.state.counter + 1});
// this.setState({ counter: this.state.counter + 1});
// this.setState({ counter: this.state.counter + 1});
// this.setState({ counter: this.state.counter + 1});
// this.setState({ counter: this.state.counter + 1});

// what is react doing here?
// 1. setState is asynchronously run
// 2. replacing? nulling something?
  // multiple setStates on the callstack
  // merge the object
  // this is setState and React trying to be smart
// Object.assign({ this is your old state },
//   { counter: this.state.counter + 1},
//   { counter: this.state.counter + 1},
//   { counter: this.state.counter + 1},
//   { counter: this.state.counter + 1},
//   { counter: this.state.counter + 1},
//   { counter: this.state.counter + 1},
// )
