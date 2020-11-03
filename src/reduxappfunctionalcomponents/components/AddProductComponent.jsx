import React, { useState,useEffect } from 'react';
import {useSelector} from 'react-redux';
const AddProductComponent=(props)=>{
  
  const [product, updateProduct]=useState({ProductId:0,ProductName:''});
  const handleClick=()=>{
      // when the button is clicked the
      // product state object will be passed to 
      // the AddClick() props which is used by MainComponent
     props.AddClick(product);
  }  
   const prd = useSelector(state=>state.selectProductReducer);
   console.log(prd);
   
  const clear=()=>{
   updateProduct({ProductId:0,ProductName:''});
  }
  useEffect(() => {
   if(prd.product !== undefined) {
      updateProduct(prd.product.product);
   }
  });
  return (
      <div>
         <div>
           <label htmlFor="">Product Id</label>
           <input type="text"
            value={product.ProductId}
            onChange={(evt)=>updateProduct({...product, ProductId:parseInt(evt.target.value)})}/>
         </div>
         <div>
           <label htmlFor="">Product Name</label>
           <input type="text"
            value={product.ProductName}
            onChange={(evt)=>updateProduct({...product, ProductName:evt.target.value})}/>
         </div>
         <div>
           <input type="button" value="Add"
            onClick={handleClick}/>
            <input type="button" value="Clear" onClick={clear}/>
         </div>
      </div>
  );

};

export default AddProductComponent;
