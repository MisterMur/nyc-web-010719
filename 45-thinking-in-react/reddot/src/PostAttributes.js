import React, { Fragment } from 'react';

const PostAttributes = (props) => {
  return (
    <Fragment>
      <br/>
      <button>Comments</button>
      <button>Share</button>
      <button>Save</button>
      <button>
        Upvote
      </button>
      <p>{props.likes}</p>
      <button>Downvote</button>
    </Fragment>
  );
}

export default PostAttributes;
