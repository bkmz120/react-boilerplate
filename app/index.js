'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
const reducer = combineReducers({
  ...reducers
})

import './styles/common.scss';


const store = createStore(
  reducer,
  {},
  applyMiddleware(thunk)
)


const App = () => (
  <Provider store={store}>
    <div>Well, well, well... </div>
  </Provider>
)

ReactDOM.render(<App/>, document.getElementById('root'))