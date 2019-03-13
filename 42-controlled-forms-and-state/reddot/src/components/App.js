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

  // TODO: No hardcoding [0]
  upvote = (id) => {
    console.log("do some sort of upvote", this.state.posts[0].likes);

    // thinking about how we did it in Mod 3
    // I need an id
    // found it in the database
    // e.target.id === my_id (data-attribute)
    // console.log(e.target.parent); // that was mod 3
    console.log(id);

    // if your new state is based off the old one
    // you probably should use the functional way of using setState
    this.setState(prevState => {
      // let newPosts = [...prevState.posts];
      // // const foundPost = newPosts.find(post => post.id === id);
      // // const postIndex = newPosts.indexOf(post => post.id === id);
      // let newFirstPost = {...foundPost};
      // newFirstPost.likes++;
      // newPosts[0] = newFirstPost;

      let newPosts = prevState.posts.map(post => {
        if (post.id === id) {
          let newPost = {...post};
          newPost.likes++;
          return newPost;
          // return {...post, likes: post.likes + 1}
        }
        return post;
      })

      return { posts: newPosts }
    });
  }

  // TODO: No hardcoding [0]
  downvote = (id) => {
    console.log("do some sort of downvote", this.state.posts[0].likes);

    this.setState(state => {
      let newPosts = state.posts.map(post => {
        if (post.id === id) {
          let newPost = {...post};
          newPost.likes--;
          return newPost;
          // return {...post, likes: post.likes - 1}
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
    // you should use functional setstate here
    let newPosts = [...this.state.posts];
    // push into the this.state.posts
    newPosts.push({
      id: uuid(),
      title: title,
      src: url,
      likes: 0,
      comments: [],
    });

    this.setState({
      posts: newPosts,
    });
  }

  // our inputs don't rerender
  // uncontrolled form
  // with a value and onChange, this is a controlled form
  // state is everything that's dynamic in the DOM
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
