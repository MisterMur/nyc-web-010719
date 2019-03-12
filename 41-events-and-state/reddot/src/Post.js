import React, { Component } from 'react';

var votes = 0;

// features of a class component is that it can have state
// functional components cannot have state...
class Post extends Component {
  constructor(props) {
    super(props)

    // we only change likes
    // state comes from somewhere => database
    this.state = {
      title: "Sugar is too fat.", // what would title initially render as? ""
      likes: 11.2, // when we click a button
      comments: [
        "hello",
        "first",
        "didn't get first"
      ],
    } // should be an object

    this.upvote = this.upvote.bind(this); // this as #2 method
  }

  // also not bound
  // this is a feature given to you by create-react-app + babel
  // class field decclaration => stage 3 proposal
  // upvote = () => { // option two for binding
  upvote() {
      // arrow functions => what extra thing does an arrow function do?
      // why the labs arrow everything
      console.log("do some sort of upvote", this.state.likes);
      // think back to Mod 3
      // fetch

      // this.state.likes++; never do this... mutating state
      // tell react that state changed, go make everything happen
      this.setState({
        likes: this.state.likes + 1,
        new: "key"
      })

      // watch your calendar

      // update local variables
      // votes++;
      // change the text
      // by using a prop
      // rerender
      // this.forceUpdate(); // i will ask why... probably jusat fail you on the CC

      // why would I get undefined for this?
      // that is Mod 3... not very declarative

  }
  // }.bind()// let's not do that

  // this is called on the instance
  render() {
    console.log('Post', this.props, this.state);

    return (
      <div id="1" className="container" data-id="1">
        <h2>{this.state.title.toUpperCase()}</h2>
        <img src=""/>
        <button> >Comments</button>
        <button>Share</button>
        <button>Save</button>
        {/* <button onClick={this.upvote.bind(this)}>
          this method is bad
          why?
          hard to reuse
          constantly rebinding every thing you run render
        */}
        <button onClick={this.upvote}>
          Upvote
        </button>
        <p>{this.state.likes}</p>
        <button>Downvote</button>
      </div>
    );
  }
}

export default Post;
