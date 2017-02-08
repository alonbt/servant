import 'core-js/fn/object/assign';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom';
import App from './components/Main';
import servantApp from './reducers';
import createLogger from 'redux-logger';

let store = createStore(servantApp, applyMiddleware(createLogger()));

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));

