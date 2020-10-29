import React, { Component } from 'react';

class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             receivedContactNumber:0   
         };
    }

    // read the value in the ContactComponent
    // that is received from the URL in routing always
    // in componentDidMount

    componentDidMount=()=>{
        // logic for read the route parameter
        let id = this.props.match.params.id;
        this.setState({receivedContactNumber:id})
        console.log(`Contact Component is mounted`);
    }
    componentWillUnmount=()=>{
        console.log(`Contact Component is un mounted`);
    }
    render() { 
        return ( 
            <div>
              <h2>The Contact Component</h2>
              <div>
                <strong>
                  Received value is : {this.state.receivedContactNumber}
                </strong>
              </div>
            </div>
        );
    }
}
 
export default ContactComponent;