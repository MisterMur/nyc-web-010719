import React from 'react';
import Post from './Post';
import PostAttributes from './PostAttributes';

const PostList = (props) => {
  console.log(props);
  return props.posts.map(post => (
    <Post title={post.title} src={post.src} key={post.id}>
      <PostAttributes likes={post.likes} />
    </Post>
  ));
}

export default PostList;
