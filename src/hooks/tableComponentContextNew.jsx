import React, {useContext} from 'react';
import {DataContext} from './dataContext'
const TableComponentContextNew=()=>{
    // subscribe to the DataContext using useContext object
    // read the data from the DataContext
    const dataContext = useContext(DataContext);

    // read the products data using the indexer of the values from provider 
    const dataSource =  dataContext[Object.keys(dataContext)[0]]; // products array
    const event = dataContext[Object.keys(dataContext)[1]]; // read the method

    if(dataSource.length ===0) {
      return <div>No Records</div>
    }
    else {
    let columns = [];
    columns = Object.keys(dataSource[0]);
    return(
        <div className="container">
          <strong>Data in Table</strong>
          <hr/>
              
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
                        dataSource.map((d,i)=>(
                              <tr key={i} onClick={()=>event(d)}>
                                 {
                                  columns.map((c,idx)=> (
                                      <td key={idx}>{d[c]}</td>
                                  ))
                                 }
                                  
                              </tr>  
                          ))
                      }
                   </tbody>
                 </table>
              </div>
        </div>
      
    );
  }
}

export default TableComponentContextNew;
