import React from 'react';

const CommentList = (props) => (
  <ul>
    {props.comments.map(comment => <li key={comment.id}>{comment.message}</li>)}
  </ul>
);

export default CommentList;
