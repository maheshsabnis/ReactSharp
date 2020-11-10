import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/d3/dist/d3';

// import createStore, applyMiddleware, compose
// applyMiddleware: Used to register SAGA middleware for store,
// applyMiddleware will manage all async calls
// compose: Used to register the Redux Simulator with application
import {createStore, applyMiddleware, compose} from 'redux';
// import Provider
import {Provider} from 'react-redux'
// import reducer
import reducer from './sagaapps/reducers/reducers';

// import the createSagaMiddleware to confugure SAGA middleware
// with the applciation
import createSagaMiddleware from 'redux-saga'; 

// import MainComponent
import MainSagaComonent from './sagaapps/MainSagaComponent';
import * as serviceWorker from './serviceWorker';
import rootSaga from './sagaapps/sagas';
// create an instance of Saga Middleware
const appSagaMiddleware = createSagaMiddleware();


// create a store with Simulator Compose
const parameterEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create a store using reducer, then confugure the Redux Simulator and
// the SAGA middleware so that, all async operations will be monitored
let store = createStore(
 reducer,
 parameterEnhancer(applyMiddleware(appSagaMiddleware))
);

// keep running the saga middleware 
appSagaMiddleware.run(rootSaga);


 // the Provider will create a subscription of 'store'
 // for all components executing under it
ReactDOM.render(
  <Provider store={store}>
    <MainSagaComonent></MainSagaComonent>
  </Provider>
   ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
