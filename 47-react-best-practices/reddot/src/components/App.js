import React, { Component, Fragment } from 'react';

import '../assets/css/App.css';

import Header from './Header';
import HomePage from './HomePage';
import CommentsPage from './CommentsPage';

const HOME_PAGE = "HOME_PAGE";
const COMMENT_PAGE = "COMMENT_PAGE";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPost: null,
      currentPage: HOME_PAGE,
    }
  }

  goToHomePage = () => {
    this.setState({ currentPage: HOME_PAGE });
  }

  goToComments = (postId) => {
    this.setState({ selectedPost: postId, currentPage: COMMENT_PAGE });
  }

  renderPage() {
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
    return (
      <Fragment>
        <Header goToHomePage={this.goToHomePage} />
        {this.renderPage()}
      </Fragment>
    );
  }
}

export default App;
