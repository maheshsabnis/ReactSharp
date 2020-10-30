import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'd3/dist/d3';

// import createStore
import {createStore} from 'redux';
// import Provider
import {Provider} from 'react-redux'
// import reducer
import rootReducer from './reduxappfunctionalcomponents/reducers/redecurs'; 
// import MainComponent
import MainComponent from './reduxappfunctionalcomponents/MainComponent';
// import the BrowserRouter for routing Execution 

import * as serviceWorker from './serviceWorker';
 
// create a store using the reducer
// also add a window object that will simulate the redux in browser (only in dev.)
let store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());


 // the Provider will create a subscription of 'store'
 // for all components executing under it
ReactDOM.render(
  <Provider store={store}>
    <MainComponent></MainComponent>
  </Provider>
   ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
