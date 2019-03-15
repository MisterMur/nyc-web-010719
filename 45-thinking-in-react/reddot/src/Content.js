import React from 'react';
import PostFormContainer from './PostFormContainer';
import Trending from './Trending';
import PostList from './PostList';

import { database } from './apis/database';

class Content extends React.Component {
  state ={
    posts: [],
  }

  componentDidMount() {
    // fetch .then(res => res.json()).then(posts => )
    this.setState({ posts: database })
  }

  addPost = (title, src) => {
    console.log(title, src);
    this.setState(prevState => {
      return {
        posts: [...prevState.posts, { title, src, id: prevState.posts.length + 1, likes: 0 }]
      }
    })
  }

  render() {
    // console.log('database', database);
    return (
      <content className="border">
        <PostFormContainer addPost={this.addPost} />
        <Trending posts="fakle trending posts array"/>
        <PostList posts={this.state.posts} />
      </content>
    );
  }
}

export default Content;
