import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'd3/dist/d3';
import App from './App';
import SimpleComponent from './components/simplecomponent/simplecomponent';

import SimpleCalculator from './components/simplecalculator/simplecalculator';
import ProductFormComponent from './components/productformcomponent/productformcomponent';
import LifeCycleParentComponent from './components/lifecyclehooks/lifecyclecompopnent';
import ServiceComponent from './components/servicecomponent/servicecomponent';
import ValidatorComponent from './components/formvalidations/validatorcomponent';
import Circle from './components/d3js/circleComponent';
import BarComponent from './components/d3js/barChartComponent';
import HoCComponent from './components/hoc/HoCComponent';
import CompanyComponent from './components/hoc/CompanyComponent';
import StockComponent from './components/hoc/Stockomponent';
import BarchartNewComponent from './components/d3js/newchart';
import CounterContainerComponent from './components/errorboundrycomponent/MyCounterComponent';
import MouseMoveToggelingComponent from './hooks/mouseMoveToggelingComponent';
import ProductStateHookComponent from './hooks/useStateComponent';
import MainComponent from './reduxappfunctionalcomponents/MainComponent';
import GraphComponent from './components/d3js/GraphComponent';
import ColumnChart from './components/d3js/columnchart';
// import the BrowserRouter for routing Execution
import {BrowserRouter} from 'react-router-dom';
import OrderedList from './components/componentfortest/OrderList';

import StaticBarChartComponent from './components/simplechartsapp/StaticBarChartComponent';

import * as serviceWorker from './serviceWorker';
// rdenering the Component
// parameter 1, is the component that is to be rendered
// parameter 2, the DOM element on which the component
// will be mounted for rendering
let message = "The Message from Root of the Applciation";
let value = 1000;

const Companies = [{id:101, name: 'Microsoft', headcount: 100000},{id:102, name: 'IBM', headcount: 10000}];
const Stocks = [
   {id: 10001, name: 'HP', count: 1000, price:200},
   {id: 10002, name: 'Oracle', count: 1000, price:200},
   {id: 10003, name: 'TCS', count: 1000, price:200},
   {id: 10004, name: 'HCL', count: 1000, price:200}
]; 

const MyCompnayComponent = HoCComponent(CompanyComponent, Companies);
const MyStockComponent = HoCComponent(StockComponent, Stocks);


// the 'msg' will be used as a 'props' type
ReactDOM.render(
  <React.StrictMode>
    
      <ColumnChart ></ColumnChart>
      
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
