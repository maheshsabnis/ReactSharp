import React, {useContext} from 'react';
import {DataContext} from './dataContext'
const TableComponentContext=()=>{
    // subscribe to the DataContext using useContext object
    // read the data from the DataContext
    const dataContext = useContext(DataContext);
    if(dataContext.length ===0) {
      return <div>No Records</div>
    }
    else {
    let columns = [];
    columns = Object.keys(dataContext[0]);
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
                         dataContext.map((d,i)=>(
                              <tr key={i}>
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

export default TableComponentContext;
