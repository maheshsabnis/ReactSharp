import React, { Component } from 'react';
import {getProducts} from  './../actions/actions';
 // to connect class component with redux store, traditionally 
 // we have the 'connect()' method. This is replaced by useSelector()
 import {connect} from 'react-redux';
class GetProductsRequestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container">
                <button onClick={this.props.getProducts} className="btn btn-danger">GET PRODUCTS Data</button>
            </div>
        );
    }
}

// implement mapDispatchToProps() method , this will dispatch an action from Component
// whihc is defined using props immutable objeci
const mapDispatchToProps={
    // props: action to be dispatched, this is declared in actions.js in actions folder
    getProducts: getProducts
};

// connect the react component with redux, so that when an action is
// dispatched form Component, it will be monitored by store which is created
// using reducer 
// let store = createStore(reducer); 

export default connect(null, mapDispatchToProps)(GetProductsRequestComponent);