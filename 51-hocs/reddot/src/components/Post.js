import React from 'react';

const Post = (props) => (
  <div className="post-container">
    <h2>{props.title}</h2>
    <img src={props.src} alt="something" />
    {props.children}
  </div>
);

export default Post;
