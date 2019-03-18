import React, { Component, Fragment } from 'react';
//external libraries

import '../assets/css/App.css';

import Header from './Header';
import HomePage from './HomePage';
import CommentsPage from './CommentsPage';

const HOME_PAGE = "HOME_PAGE";
const COMMENT_PAGE = "COMMENT_PAGE";

// Function => use a function
// Class => state, Lifecycle methods
//    extends Component
// PureComponent

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPost: null,
      currentPage: HOME_PAGE,
    }
  }

  goToHomePage = () => {

    console.log(this.state);
    console.log(JSON.stringify(this.state));
    console.log(JSON.parse(JSON.stringify(this.state)));
    console.log(this.state === JSON.parse(JSON.stringify(this.state)));

    // nested , super duper nested state
    // very neat hack... slow

    localStorage.setItem("key", JSON.stringify(this.state))

    console.log(JSON.parse(localStorage.getItem("key")));
    this.setState(JSON.parse(localStorage.getItem("key")))

    // useful for caching

    this.setState({ currentPage: HOME_PAGE });
  }

  goToComments = (postId) => {
    this.setState({ selectedPost: postId, currentPage: COMMENT_PAGE });
  }

  renderPage() {

    let x = [1,2,3];
    // [{ number: 1 }, {}]
    // x.map(   num => ({ number: num })   )

    const newNum = 10;
    // let copyX = [...x, newNum];
    let copyX = [newNum, ...x];
    // copyX.push(newNum);

    switch (this.state.currentPage) {
      case HOME_PAGE:
        return <HomePage goToComments={this.goToComments} />
      case COMMENT_PAGE:
        return <CommentsPage postId={this.state.selectedPost} />
      default:
        return <h1>404!</h1>
    }

  }

  render() {
    // return <Fragment>
    // { this.state.currentPage === HOME_PAGE ?
    // <HomePage goToComments={this.goToComments} />
    // : null }
    // </Fragment>

    return (
      <Fragment>
        <Header goToHomePage={this.goToHomePage} />

        { /* be careful about too many nested ones */
          /*
          this.state.currentPage === HOME_PAGE ?
          <HomePage goToComments={this.goToComments} />
          : null
          */
          this.state.currentPage === HOME_PAGE && <HomePage goToComments={this.goToComments} />
        }
      </Fragment>
    );
  }
}

export default App;
