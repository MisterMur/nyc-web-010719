import React from 'react';

const Post = (props) => {
  return (
    <div className="border">
      <h2>{props.title}</h2>
      <img src={props.src} alt="something" />
      {props.children}
    </div>
  );
}

export default Post;
