import React from 'react';

const Post = (props) => {
  // console.log('Post', props);

  return (
    <div className="post-container">
      <h2>{props.title.toUpperCase()}</h2>
      <img src={props.src} alt="a dog" />
      <button onClick={props.handleCommentButton}>Comments</button>
      <button>Share</button>
      <button>Save</button>
      <button onClick={props.upvote}>
        Upvote
      </button>
      <p>{props.votes}</p>
      <button onClick={props.downvote}>Downvote</button>
    </div>
  );
}

export default Post;
