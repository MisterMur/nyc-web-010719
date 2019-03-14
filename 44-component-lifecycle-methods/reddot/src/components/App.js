import React, { Component } from 'react';
import uuid from 'uuid';

import '../assets/css/App.css';

import Post from './Post';
import PostThread from './PostThread';
import PostForm from './PostForm';

import database from '../apis/database.js';

class App extends Component {
  state = {
    page: 'home',
    posts: database,
    counter: 0,
  }

  renderPosts() {
    return this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          id={post.id}
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

  upvote = (id) => {
    this.setState(prevState => {
      let newPosts = prevState.posts.map(post => {
        if (post.id === id) {
          return {...post, likes: post.likes + 1}
        }
        return post;
      })

      return { posts: newPosts }
    });
  }

  downvote = (id) => {
    this.setState(state => {
      let newPosts = state.posts.map(post => {
        if (post.id === id) {
          return {...post, likes: post.likes - 1}
        }
        return post;
      })

      return { posts: newPosts }
    });
  }

  goToComments = () => {
    this.setState({ page: 'comments' })
  }

  goToHome = () => {
    this.setState({ page: 'home' })
  }

  handleCreatePost = (title, url) => {
    this.setState(state => {
      let newPosts = [...state.posts];
      newPosts.push({
        id: uuid(),
        title: title,
        src: url,
        likes: 0,
        comments: [],
      });
      return { posts: newPosts }
    });
  }

  render() {
    console.log('App render', 'state', this.state);

    return (
      <div className="app-container">
        <header>
          <button onClick={this.goToHome}>Home</button>
        </header>

        <PostForm createPost={this.handleCreatePost} />
        
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
