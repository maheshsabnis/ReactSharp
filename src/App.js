import React from 'react';
import logo from './logo.svg';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import HomeComponent from './components/routingcomponents/homecomponent';
import AboutComponent from './components/routingcomponents/aboutcomponent';
import ContactComponent from './components/routingcomponents/contactcomponent';

function App() {
  // create Route Table and define the Link Based Navigation
  return (
    <div className="App">
       <h1>The React Router Application</h1>
       <table className="table table-bordered table-striped table-danger">
          <tbody>
            <tr>
              <td>
                {/* Define the Links for Executing Routes */}
                <Link to="/">Home</Link>
              </td>
              <td>
              {/* Define the Links for Executing Routes */}
              <Link to="/about">About</Link>
            </td>
            <td>
            {/* Define the Links for Executing Routes */}
            <Link to="/contact">Contact</Link>
          </td>
            </tr>
          </tbody>
       </table>
       <div>
       {/* Defining The Routing Table */}
          <Switch>
            <Route exact path="/" component={HomeComponent}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            {/* Passing parameter to the URL */}
            <Route exact path="/contact/:id" component={ContactComponent}></Route>
            {/* Redirect to default if the Route path does not match */}
            <Redirect to="/"/>
          </Switch>
       </div>
    </div>
  );
}

export default App;
