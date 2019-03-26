import React from 'react';
import withColor from '../hocs/withColor';
import withAd from '../hocs/withAd';

const Post = (props) => {
  console.log('Post', props);

  return (
    <div className="post-container" style={{ backgroundColor: props.color }}>
      <h2>{props.title}</h2>
      <img src={props.src} alt="something" />
      {props.children}
    </div>
  );
}

// all Posts have the color prop
export default withAd(withColor(Post));
