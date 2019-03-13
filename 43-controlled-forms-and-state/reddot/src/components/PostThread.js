import React from 'react';

import Post from './Post';
import CommentList from './CommentList';

const PostThread = (props) => {
  // console.log('PostThread', props);

  return (
    <div>
      <Post
        title={props.post.title}
        src={props.post.src}
        votes={props.post.likes}
        upvote={props.upvote}
        downvote={props.downvote}
        handleCommentButton={props.goToComments}
      />
      <CommentList comments={props.post.comments} />
    </div>
  );
}

export default PostThread;
