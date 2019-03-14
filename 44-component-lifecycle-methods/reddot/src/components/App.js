import React, { Component } from 'react';
import uuid from 'uuid';

import '../assets/css/App.css';

import Post from './Post';
import PostThread from './PostThread';
import PostForm from './PostForm';
import PreviewPost from './PreviewPost';

// import { database } from '../apis/database.js';
import ReddotAdapter from '../apis/ReddotAdapter';

class App extends Component {
  state = {
    page: 'home',
    posts: [], // real data, default your data to what you expect it to be
    // counter: 0,
    togglePreview: false,
    title: "",
    url: "",
  }

  handleSubmit = (event) => {
    event.preventDefault(); // default of a form submits
    console.log("it works", this.state.title);

    this.handleCreatePost(this.state.title, this.state.url);

    this.setState({
      title: "",
      url: "",
    });
  }

  handleTitleChange = (event) => {
    console.log('it works again', event.target.value);
    this.setState({ title: event.target.value.toUpperCase() });
  }

  handleUrlChange = (event) => {
    console.log('it works again', event.target.value);
    this.setState({ url: event.target.value });
  }

  componentDidMount() {
    ReddotAdapter.getPosts()
      .then(res => res.json())
      .then(posts => {
        // this.setState({ posts: posts })
        this.setState({ posts }) // nice shorthand trick
      })
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

  handlePreviewButton = () => {
    console.log("wroite this correctly");
    this.setState(prevState => {
      return { togglePreview: !prevState.togglePreview }
    })
  }

  render() {
    console.log('App render', 'state', this.state);

    return (
      <div className="app-container">
        <header>
          <button onClick={this.goToHome}>Home</button>
        </header>

        <PostForm
          handleSubmit={this.handleSubmit}
          handleTitleChange={this.handleTitleChange}
          handleUrlChange={this.handleUrlChange}
          title={this.state.title}
          url={this.state.url}
        />

        <button onClick={this.handlePreviewButton}>Preview Post!</button>

        { /* I want it up here - one big problem - lifting state */
          this.state.togglePreview ?
            <PreviewPost
              title={this.state.title}
              url={this.state.url}
            />
          :
            null
        }

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
