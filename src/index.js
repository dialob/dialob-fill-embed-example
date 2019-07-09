import React from 'react'
import {render} from 'react-dom'
import App from './App'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import {createDialobReducer, createDialobMiddleware } from 'dialob-fill-ui';

// Global Dialob configuration
const DIALOB_CONFIG = {
  transport: {
    mode: 'rest', // REST is currently supported
    endpoint: 'http://localhost:8080/session/dialob', // Filling REST service endpoint location
    credentials: 'same-origin' // Optional request credentials mode, see https://fetch.spec.whatwg.org/#concept-request-credentials-mode
  }
}

// Add Dialob reducer and middleware to you application's redux store
const reducers = {
  dialob: createDialobReducer()
};
const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(createDialobMiddleware(DIALOB_CONFIG)));

render(<Provider store={store}><App/></Provider>, document.querySelector('#app'))
