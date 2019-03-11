import React from 'react';

function PostBox(props) {
  // const title = "What video game sound effect can you still hear in your head?";
  console.log('PostBox', props);
  // your render
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
