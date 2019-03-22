import React, { Component, Fragment } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import '../assets/css/App.css';

import Header from './Header';
import HomePage from './HomePage';
import CommentsPage from './CommentsPage';
import NotFound from './NotFound';

const HOME_PAGE = "HOME_PAGE";
const COMMENT_PAGE = "COMMENT_PAGE";

function Index() {
  return <h2>Home Example Index</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// route => / => Home
// route => /posts/:id/comments  => Comments

// App
//   / Home
//   /posts/:id/comments Comnments
//   /about  About


class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   selectedPost: null,
    //   currentPage: HOME_PAGE,
    // }
  }

  // goToHomePage = () => {
  //   this.setState({ currentPage: HOME_PAGE });
  // }
  //
  // goToComments = (postId) => {
  //   this.setState({ selectedPost: postId, currentPage: COMMENT_PAGE });
  // }
  //
  // renderPage() {
  //   switch (this.state.currentPage) {
  //     case HOME_PAGE:
  //       return <HomePage goToComments={this.goToComments} />
  //     case COMMENT_PAGE:
  //       return <CommentsPage postId={this.state.selectedPost} />
  //     default:
  //       return <NotFound />
  //   }
  // }

  render() {
    return (
      <Fragment>
        <Header goToHomePage={this.goToHomePage} />

        <NavLink to="/posts/1/comments" activeClassName="selected">Example</NavLink>
        <NavLink to="/" exact activeClassName="selected">Home Example</NavLink>
        <NavLink to="/about" activeClassName="selected">About</NavLink>

        {/* same gotcha as in rails */}
        <Switch>
          <Route path="/posts/:id/comments" component={CommentsPage} />
          <Route path="/" exact render={(props) => {




                return <HomePage {...props} goToComments={this.goToComments} />
            }} />
          <Route component={NotFound}/>
        </Switch>

        <Route path="/" component={Index} />

        {/*this.renderPage()*/}
      </Fragment>
    );
  }
}

export default App;
