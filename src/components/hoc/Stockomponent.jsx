import React, { Component } from 'react';
import TableComponent from './../reusablecoponents/TableComponent';
class StockComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
              <h2>The Stock Component</h2>
              <TableComponent dataSource = {this.props.data} ></TableComponent>
            </div>
         );
    }
}
 
export default StockComponent;