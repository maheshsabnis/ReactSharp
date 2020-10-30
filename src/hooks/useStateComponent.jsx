import React, {useState, useEffect} from 'react';
import ListComponentProps from './listcomponentprops';
import TableComponentContextNew from './tableComponentContextNew';
// import the DataContext so that the current component will pass data to it
import {DataContext} from './dataContext';
import {HttpService} from './../services/httpservice';
// functional component
const ProductStateHookComponent=()=>{

    const serv = new HttpService();


    // state declaration using 'useState' hooks
    // destructuring, defining the object propries
    // and initializing it by object
    // let obj = {x:0,y:}; Traditional object definition
    // ES 6 destructuring
    // const {x,y} = obj;
    // const [x,y,z] = myarry;

    //    [initState, callback to update state] = useState(InitialState)
    const [product, updateProduct] = useState({
        ProductId:0, ProductName:'', CategoryName:'',
        Manufacturer:'', Description:'', BasePrice:0
    });
    const [products, addProduct]=useState([]);
    const categories =["ECT","ECL","CVL","MEC"];
    const manufacturers = ["MS-ECT", "LS_ECL", "TS-CVL", "RS-MEC"];
    const clear=()=>{
        updateProduct({
            ProductId:0, ProductName:'', CategoryName:'',
            Description:'', BasePrice:0
        });
    }

    // make a call to HttpServce

    useEffect(()=>{
      serv.getData().then((response)=>{
         addProduct(response.data);
      }).catch((error)=>{
        console.log(`Error Occured ${error}`);
      });
    },[]);
    

    const save=()=>{
        // use an object mutation to update same products array (state property)
        // using the updated product
        // addProduct([...products, {ProductId:product.ProductId, 
        //      ProductName:product.ProductName,
        //      CategoryName:product.CategoryName,
        //     Manufacturer: product.Manufacturer,
        //   Description:product.Description,
        // BasePrice: product.BasePrice}]);

        serv.postData(product).then((response)=>{
          addProduct([...products, response.data]);
       }).catch((error)=>{
         console.log(`Error Occured ${error}`);
       });
    }


   return (
        <div className="container">
          <h2>The Functional Component</h2>
          <div className="form-group">
          {/* To update the State Property on onChange event use the spread operator
            ...product is same as Object.copy(newObject, originalObject);

            (evt)=>updateProduct({...product, ProductId:parseInt(evt.target.value)})
             The Same product object will be updated everytime the onChange event is fired
        */}
            <label>Product Id</label>
            <input type="text"  
            name="ProductId"
            value={product.ProductId}
            className="form-control" 
            onChange={(evt)=>updateProduct({...product, ProductId:parseInt(evt.target.value)})}/>
          </div>
          <div className="form-group">
            <label>Product Name</label>
            <input type="text"  
            name="ProductName"
            value={product.ProductName}
            className="form-control"  
            onChange={(evt)=>updateProduct({...product, ProductName:evt.target.value})}/>
          </div>
          <div className="form-group">
            <label>Category Name</label>
            <select type="text"  
            name="ProductName"
            value={product.CategoryName}
            onChange={(evt)=>updateProduct({...product, CategoryName:evt.target.value})}
            className="form-control">
             <option>Select Category</option>
             {
                 categories.map((cat,idx)=>(
                      <option key={idx} value={cat}>{cat}</option>  
                 ))
             }
            </select>
         </div>
         <div className="from-group">
          <label htmlFor="">Manufacturers</label>
          {/* data: is the Manufacturer values to be receibed from 
        child component 
       dataSource: teh data passed frm parent to child
       emitSelectedData: will be used to receive data from child to parent
    */}
          <ListComponentProps data={product.Manufacturer} 
          dataSource={manufacturers}
          emitSelectedData={(data)=>updateProduct({...product, Manufacturer:data})}></ListComponentProps>
         </div>
        
         <div className="form-group">
            <label>Description</label>
            <input type="text"  
            name="Description"
            value={product.Description}
            className="form-control"  
            onChange={(evt)=>updateProduct({...product, Description:evt.target.value})}/>
          </div>
          <div className="form-group">
            <label>Base Price</label>
            <input type="text"  
            name="BasePrice"
            value={product.BasePrice}
            className="form-control"  
            onChange={(evt)=>updateProduct({...product, BasePrice:parseInt(evt.target.value)})}/>
          </div>
          <div className="form-group">
          <input type="button" value="Clear" className="btn btn-warning"
          onClick={clear} />
          <input type="button" value="Save" className="btn btn-success"
          onClick={save} />
       </div>
        {/* <div className="container">
           <DataContext.Provider value={products}>
                <TableComponentContext/>
            </DataContext.Provider>
  </div>*/}
        
         <div className="container">
         <DataContext.Provider value={{products,updateProduct}}>
              <TableComponentContextNew/>
          </DataContext.Provider>
       </div>
        </div>
    );
}

export default ProductStateHookComponent;