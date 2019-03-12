import React from 'react';

// function PostBox(props) {
const PostBox = props => {
  console.log('PostBox', props);

  // JSX commenting
  return (
    <div
      id="1"
      className="container"
      data-id="1"
      onClick={function(e) { console.log("div clicked", e.nativeEvent); }}
    >
      {/* <h2>{props.title}</h2> */}
      <img src=""/>
      <button onClick={function() { console.log("clicked"); }}> >Comments</button>
      <button onClick={function() { console.log("clicked"); }}>Share</button>
      <button onClick={function() { console.log("clicked"); }}>Save</button>
      <button onClick={function() { console.log("clicked"); }}>Upvote</button>
      <p>{props.votes}</p>
      <button onClick={function() { console.log("clicked"); }}>Downvote</button>
    </div>
  );
}

export default PostBox;
