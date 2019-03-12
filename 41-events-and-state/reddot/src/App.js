import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import PostBox from './PostBox';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div>
        <PostBox
          title="What video game sound effect can you still hear in your head?"
          votes={345435}
        />
        <PostBox
          title="something else"
          votes={3434}
        />
        <Post
          title="Sugar is too fat now."
          votes={11.2}
        />
      </div>
    );
  }
}

export default App;
