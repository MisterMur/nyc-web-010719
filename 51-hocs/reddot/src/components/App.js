import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../assets/css/App.css';

import Header from './Header';
import HomePage from './HomePage';
import CommentsPage from './CommentsPage';
import NotFound from './NotFound';
import ProfilePage from './ProfilePage';

const App = (props) => (
  <Fragment>
    <Header />

    <Switch>
      <Route path="/profile" component={ProfilePage} />
      <Route path="/posts/:id/comments" component={CommentsPage} />
      <Route path="/" exact component={HomePage} />
      <Route component={NotFound}/>
    </Switch>
  </Fragment>
);

export default App;
