import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
           contactNumber:0     
        };
    }
    componentDidMount=()=>{
        console.log(`Home Component is mounted`);
    }
    componentWillUnmount=()=>{
        console.log(`Home Component is un mounted`);
    }
    gotoAbout=()=>{
        // props.history -- will use the history of the broswer
        // maintained by the router to navigate to specific URL
        // that match with the route table
        this.props.history.push('/about');
    }
    render() { 
        return ( 
            <div>
              <h2>The Home Component</h2>
              Enter Contact Value :
              <input type="text" value={this.state.contactNumber}
                onChange={(evt)=> {
                    this.setState({contactNumber: parseInt(evt.target.value)})
                }}
              />
              {/* Define a link to navigate 
              route parameters will be send using 'Parameters' type
            that use  'props' to contain the state of the values
        send through the route parameters. The target component
    will read route parameter values using
   'this.props.match.params.<ROUTE-PARAMETER>'  e.g.
   this.props.match.params.id
*/}
              <button className="btn btn-danger">
                 <Link to={`/contact/${this.state.contactNumber}`}>Go To Contact</Link>
              </button>
              <hr/>
              <input type="button" value="Go To About" 
               onClick={this.gotoAbout.bind(this)}
              className="btn btn-warning"/>
            </div>
        );
    }
}
 
export default HomeComponent;