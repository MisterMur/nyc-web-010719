import React, { Component } from 'react';
import uuid from 'uuid';

// import logo from './logo.svg';
import './App.css';

// import PostBox from './PostBox';
import Post from './Post';

// whereever state lives, that's the componet, person, who will change that this.state
// they are the owner, they control state

// state is the state of your app
// just put into an {}
// minimal

// first lesson, they don't go on Components
class App extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //
  //   }
  // }

  // think mod 2
  // the route => determines what page is rendered

  // won't work unless you have that babel feature neabled
  state = {
    page: 'home', // if/else, elseif => represent what is currently being rendered
                  // 'comments'
    // all this data comes from a database, you will get an id
    posts: [
      {
        title: "What video game sound effect can you still hear in your head?",
        likes: 343,
        comments: [
          "hello",
          "first",
          "didn't get first"
        ],
      },
      {
        title: "something else",
        likes: 1,
        comments: [
          "hello",
          "first",
          "didn't get first"
        ],
      },
      {
        title: "Sugar is too fat now.",
        likes: 11.2,
        comments: [
          "hello",
          "first",
          "didn't get first"
        ],
      }
    ]
  }

  // renderPosts = () => {
  renderPosts() {
    return this.state.posts.map((post, index) => {
      //. never use index
      return (
        <Post
          key={uuid()}
          title={post.title}
          votes={post.likes}
          downvote={this.downvote}
          handleCommentButton={this.goToComments}
        />
      );
    })
  }

  // passing down a callback so the child can change state in the parent
  downvote = () => {
    console.log("do some sort of upvote", this.state.likes);

    // if you ever want to update something in state that is either:
    // array
    // object
    // you must make a copy of them first
    // this.state.posts[0].likes = this.state.posts[0].likes + 1

    // let a = [1, 2, 3]
    // a.push(4)
    // a reference //

    // copying arrays
    // let newPosts = this.state.posts.slice() // option 1
    let newPosts = [...this.state.posts] // option 2

    // copying objects
    let newFirstPost = {...newPosts[0]} // option 1
    // let newFirstPost = Object.assign({}, newPosts[0]) // option 2

    newFirstPost.likes--;
    newPosts[0] = newFirstPost;


    this.setState({
      likes: this.state.likes - 1,
      posts: newPosts
    })
  }

  goToComments = () => {
    this.setState({
      page: 'comments'
    })
  }

  render() {
    console.log('App', this.state);

    // conditional for you rendering => conditional rendering
    //
    return (
      <div>
        {this.state.page === 'home' ? this.renderPosts() : <p>eventually render comments</p>}
        {/*
        <PostBox
          title="What video game sound effect can you still hear in your head?"
          votes={345435}
          onClick={function() { console.log("clicked"); }}
        />
        <PostBox
          title="something else"
          votes={3434}
        />
        <Post
          title="Sugar is too fat now."
          votes={11.2}
        />
        */}
      </div>
    );
  }
}

export default App;
