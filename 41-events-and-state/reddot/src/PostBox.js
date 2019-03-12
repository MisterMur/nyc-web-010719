import React from 'react';

function PostBox(props) {
  console.log('PostBox', props);

  return <div id="1" className="container" data-id="1">
    <h2>{props.title}</h2>
    <img src=""/>
    <button> >Comments</button>
    <button>Share</button>
    <button>Save</button>
    <button>Upvote</button>
    <p>{props.votes}</p>
    <button>Downvote</button>
  </div>
}

export default PostBox;
