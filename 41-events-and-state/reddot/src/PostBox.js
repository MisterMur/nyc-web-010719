// import React from 'react';
//
// // function PostBox(props) {
// const PostBox = props => {
//   console.log('PostBox', props);
//
//   // JSX commenting
//   return (
//     <div
//       id="1"
//       className="container"
//       data-id="1"
//       onClick={function(e) { console.log("div clicked", e.nativeEvent); }}
//     >
//       <h2>{props.title}</h2>
//       <img src=""/>
//       <button onClick={function() { console.log("clicked"); }}> >Comments</button>
//       <button onClick={function() { console.log("clicked"); }}>Share</button>
//       <button onClick={function() { console.log("clicked"); }}>Save</button>
//       <button onClick={function() { console.log("clicked"); }}>Upvote</button>
//       <p>{props.votes}</p>
//       <button onClick={function() { console.log("clicked"); }}>Downvote</button>
//     </div>
//   );
// }
//
// export default PostBox;






















import React, { Component } from 'react';

class PostBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "Sugar is too fat.", // what would title initially render as? ""
      likes: 11.2, // when we click a button
      comments: [
        "hello",
        "first",
        "didn't get first"
      ],
    }
  }

  upvote = () => {
    console.log("do some sort of upvote", this.state.likes);
    this.setState({
      likes: this.state.likes + 1,
    })
  }

  downvote = () => {
    console.log("do some sort of upvote", this.state.likes);
    this.setState({
      likes: this.state.likes - 1,
    })
  }

  render() {
    console.log('PostBox', this.props, this.state);

    return (
      <div id="1" className="container" data-id="1">
        <h2>{this.state.title.toUpperCase()}</h2>
        <img src=""/>
        <button> >Comments</button>
        <button>Share</button>
        <button>Save</button>
        <button onClick={this.upvote}>
          Upvote
        </button>
        <p>{this.state.likes}</p>
        <button onClick={this.downvote}>Downvote</button>
      </div>
    );
  }
}

export default PostBox;
