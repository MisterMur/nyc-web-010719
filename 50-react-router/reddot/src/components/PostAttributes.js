import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PostAttributes = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div className="vote-container">
        <button onClick={props.likePost}>Upvote</button>
        <p>{props.likes}</p>
        <button onClick={props.dislikePost}>Downvote</button>
      </div>
      <div className="link-container">
        <button onClick={props.goToComments}>Comments</button>
        <Link to={`/posts/${props.id}/comments`}>Comments</Link>
        <button>Share</button>
        <button>Save</button>
      </div>
    </Fragment>
  );
}

export default PostAttributes;
