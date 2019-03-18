import React from 'react';
import PostFormContainer from './PostFormContainer';
import Trending from './Trending';
import PostList from './PostList';

import ReddotAdapter from '../apis/ReddotAdapter';

class HomePage extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    ReddotAdapter.getPosts()
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts });
      });
  }

  addPost = (title, src) => {
    ReddotAdapter.addPost(title, src)
      .then(res => res.json())
      .then(post => {
        this.setState(prevState => {
          return { posts: [...prevState.posts, post] }
        });
      });
  }

  likePost = (postId) => {
    ReddotAdapter.likePost(postId)
      .then(res => res.json())
      .then(post => {
        this.setState(prevState => {
          const posts = prevState.posts.map(p => {
            if (p.id === postId) {
              return post;
            }
            return p;
          });

          return { posts }
        });
      });
  }

  dislikePost = (postId) => {
    ReddotAdapter.dislikePost(postId)
      .then(res => res.json())
      .then(post => {
        this.setState(prevState => {
          const posts = prevState.posts.map(p => {
            if (p.id === postId) {
              return post;
            }
            return p;
          });

          return { posts }
        });
      });
  }

  render() {
    return (
      <content className="border">
        <PostFormContainer addPost={this.addPost} />
        <Trending posts="fakle trending posts array"/>
        <PostList
          posts={this.state.posts}
          likePost={this.likePost}
          dislikePost={this.dislikePost}
          goToComments={this.props.goToComments}
        />
      </content>
    );
  }
}

export default HomePage;
