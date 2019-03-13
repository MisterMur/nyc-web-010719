import React, { Component } from 'react';

import '../assets/css/App.css';

import Post from './Post';
import PostThread from './PostThread';

import database from '../apis/database.js';

class App extends Component {
  state = {
    page: 'home',
    posts: database,
  }

  renderPosts() {
    return this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          src={post.src}
          votes={post.likes}
          upvote={this.upvote}
          downvote={this.downvote}
          handleCommentButton={this.goToComments}
        />
      );
    })
  }

  // TODO: No hardcoding [0]
  upvote = () => {
    console.log("do some sort of upvote", this.state.posts[0].likes);
    let newPosts = [...this.state.posts];
    let newFirstPost = {...newPosts[0]};
    newFirstPost.likes++;
    newPosts[0] = newFirstPost;

    this.setState({ posts: newPosts });
  }

  // TODO: No hardcoding [0]
  downvote = () => {
    console.log("do some sort of downvote", this.state.posts[0].likes);
    let newPosts = [...this.state.posts];
    let newFirstPost = {...newPosts[0]};
    newFirstPost.likes--;
    newPosts[0] = newFirstPost;

    this.setState({ posts: newPosts });
  }

  goToComments = () => {
    this.setState({ page: 'comments' })
  }

  goToHome = () => {
    this.setState({ page: 'home' })
  }

  render() {
    console.log('App render', 'state', this.state);

    return (
      <div className="app-container">
        <header>
          <button onClick={this.goToHome}>Home</button>
        </header>
        {
          this.state.page === 'home' ?
            this.renderPosts()
          :
            <PostThread
              post={this.state.posts[0]}
              upvote={this.upvote}
              downvote={this.downvote}
              handleCommentButton={this.goToComments}
            />
        }
      </div>
    );
  }
}

export default App;
