import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/index.css';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store';

// do the number of imports affect performance?
// but I believe that webpack and it's plugins will handle it for you
// benchmark it

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
