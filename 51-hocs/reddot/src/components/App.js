import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../assets/css/App.css';

import Header from './Header';
import HomePage from './HomePage';
import CommentsPage from './CommentsPage';
import NotFound from './NotFound';
import ProfilePage from './ProfilePage';

import withColor from '../hocs/withColor';

// making a new component and putting it in a variable
const NewNotFound = withColor(NotFound);

const App = (props) => (
  <Fragment>
    <Header />

    <Switch>
      <Route path="/profile" component={ProfilePage} />
      <Route path="/posts/:id/comments" component={CommentsPage} />
      <Route path="/" exact component={HomePage} />
      <Route component={withColor(NotFound)}/>
    </Switch>
  </Fragment>
);

export default App;
