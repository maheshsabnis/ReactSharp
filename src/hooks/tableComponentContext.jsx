import React, {useContext} from 'react';
import {DataContext} from './dataContext'
const TableComponentContext=()=>{
    // subscribe to the DataContext using useContext object
    // read the data from the DataContext
    const dataContext = useContext(DataContext);

    return(
        <div className="container">
          <strong>Data in Table</strong>
          <hr/>
          {JSON.stringify(dataContext)}
        </div>
    );
}

export default TableComponentContext;
