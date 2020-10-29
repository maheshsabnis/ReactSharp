import React, { Component } from 'react';
import TableComponent from './../reusablecoponents/TableComponent';
class CompanyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
              <h2>The Company Component</h2>
              <TableComponent dataSource = {this.props.data} canDelete ={this.props.canDelete}></TableComponent>
            </div>
         );
    }
}
 
export default CompanyComponent;