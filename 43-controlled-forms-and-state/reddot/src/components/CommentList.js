import React from 'react';

import uuid from 'uuid';

const CommentList = (props) => {
  // console.log('CommentList', props);

  return (
    <div className="thread-container">
      <h2>Comments</h2>
      <ul>
        {props.comments.map(comment => <li key={uuid()}>{comment}</li>)}
      </ul>
    </div>
  );
}

export default CommentList;
