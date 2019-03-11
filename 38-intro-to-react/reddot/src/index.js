import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// is the netry point for your app

// is the start of what we call Functional Components

// an expression
// ${}, <%= %>, #{}
// just run the code
// .each { | | one line }
// ? :
// function PostBox(title, as, many, args, as, you, want) {
// function PostBox(props) {
//   // const title = "What video game sound effect can you still hear in your head?";
//   console.log('PostBox', props);
//   // your render
//   return <div id="1" className="container" data-id="1">
//     <h2>{props.title}</h2>
//     <img src=""/>
//     <button> >Comments</button>
//     <button>Share</button>
//     <button>Save</button>
//     <button>Upvote</button>
//     <p>{props.votes}</p>
//     <button>Downvote</button>
//   </div>
// }

// class Post extends React.Component {
// class Post extends Component {
//   // Class Component has extra functionality
//   //    extends Component
//   // state
//
//   // this must be defined
//   render() {
//     console.log('Post', this.props);
//     return <div id="1" className="container" data-id="1">
//       <h2>{this.props.title.toUpperCase()}</h2>
//       <img src=""/>
//       <button> >Comments</button>
//       <button>Share</button>
//       <button>Save</button>
//       <button>Upvote</button>
//       <p>{this.props.votes}</p>
//       <button>Downvote</button>
//     </div>
//   }
// }

// Component
// Functional Component
//    just needs to return something to render
//    JSX under a single element, array of JSX, nothing (null, undefined, etc.)
// Class Component
//    at the least, must have render
// props
//    props are just an object
//    all the keys and values come from the "HTML attributes"
// expression {} => ${}, <%= %>, #{}
//    runs the code, spits it out into the JSX

// 1. className, htmlFor
// camelCased
// 2. data are dashed, aria

// It must be capitalized
// how you pass in arguments => props
// one tag, [], null undefined...
ReactDOM.render(
  <App />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
