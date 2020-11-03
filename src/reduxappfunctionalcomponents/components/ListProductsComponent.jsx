import React from 'react';
const ListProductsComponent=(props)=>{
   const handleRowClick=(p)=>{
   
     
      props.RowClick(p);
   }
    return(
         <div>
             <div>
               <strong>Data Received from Store {JSON.stringify(props.listProducts)}</strong>
             </div>   
             <table className="table table-bordered table-striped table-dark">
               <thead>
                 <tr>
                   <th>Product Id</th>
                   <th>Product Name</th>
                 </tr>
               </thead>
               <tbody>
                  {
                      props.listProducts.map((p,i)=>(
                         
                           <tr key={i} onClick={()=>handleRowClick(p)}> 
                             <td>{p.product.ProductId}</td>
                             <td>{p.product.ProductName}</td>
                           </tr> 

                      ))
                  }
               </tbody>
             </table>

         </div> 
    );
};

export default ListProductsComponent;
