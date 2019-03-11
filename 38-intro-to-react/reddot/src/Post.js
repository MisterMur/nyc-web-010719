import React, { Component } from 'react';

class Post extends Component {
  // Class Component has extra functionality
  //    extends Component
  // state

  // this must be defined
  render() {
    console.log('Post', this.props);
    return <div id="1" className="container" data-id="1">
      <h2>{this.props.title.toUpperCase()}</h2>
      <img src=""/>
      <button> >Comments</button>
      <button>Share</button>
      <button>Save</button>
      <button>Upvote</button>
      <p>{this.props.votes}</p>
      <button>Downvote</button>
    </div>
  }
}

export default Post;
