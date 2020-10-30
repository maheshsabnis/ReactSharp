import React from 'react';
import  TableComponent from './../../components/reusablecoponents/TableComponent';
const ListProductsComponent=(props)=>{
   
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
                           <tr key={i}>
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
