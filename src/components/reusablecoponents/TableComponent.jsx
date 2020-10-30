import React, { Component } from 'react';
class TableComponent extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        if(this.props.dataSource.length === 0) {
            return <div>No records</div>
        }

        let columns = [];
        columns = Object.keys(this.props.dataSource[0]);     
        return (
            
            <div className="container">
               <table className="table table-bordered table-striped table-danger">
                 <thead>
                    <tr>
                      {
                          columns.map((c,i)=> (
                              <th key={i}>{c}</th>
                          ))
                      }
                    </tr>
                 </thead>
                 <tbody>
                    {
                        this.props.dataSource.map((d,i)=>(
                            <tr>
                               {
                                columns.map((c,idx)=> (
                                    <td key={idx}>{d[c]}</td>
                                ))
                               }
                               <td>
                                 <input type="button" value="Delete" hidden={!this.props.canDelete}/>
                               </td>
                            </tr>  
                        ))
                    }
                 </tbody>
               </table>
            </div>
        );
    }
}
 
export default TableComponent;