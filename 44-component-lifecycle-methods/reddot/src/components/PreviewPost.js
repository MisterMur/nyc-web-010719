import React from 'react';

const PreviewPost = props => {
  return (
    <div className="post-container">
      <h2>{props.title}</h2>
      <img src={props.url} alt="a dog" />
    </div>
  );
}

export default PreviewPost;
