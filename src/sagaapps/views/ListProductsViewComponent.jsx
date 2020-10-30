import React from 'react';

import {connect} from 'react-redux';

const ListProductsViewComponent=({products})=>
    products? (
       <div className="container">
           <table className="table table-bordered table-striped">
               <thead>
                   <tr>
                       <th>Product Row Id</th>
                       <th>Product  Id</th>
                       <th>Product Name</th>
                       <th>Category Name</th>
                       <th>Manufacturer</th>
                       <th>Description</th>
                       <th>Base Price</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       products.map((p,i)=>(
                        <tr key={i}>
                            {
                                Object.keys(p).map((val,idx)=>(
                                <td key={idx}>{p[val]}</td>
                                ))
                            }    
                        </tr>
                       ))
                       
                   }
               </tbody>
           </table>
       </div> 
    ):null;

// add a mapStateToProps method. This will read the data from
// state i.e. products and will provide to the current component
// using the connect method
const mapStateToProps=state=>({
    // props: the products state received from teh store using reducer
                // with GET_PRODUCTS_SUCCESS case
    products: state.products
});
// connect(mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, null) (ListProductsViewComponent);

 