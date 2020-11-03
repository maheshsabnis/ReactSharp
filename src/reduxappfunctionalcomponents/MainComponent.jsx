import React  from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AddProductComponent from './components/AddProductComponent';
import ListProductsComponent from './components/ListProductsComponent';
import addProduct from './actions/actions';
import selectProduct from './actions/selectProduct';
const MainComponent=()=>{
    // subscribe to the state from the store using
    // useSelector. The state.listProductReducers represen the data fromthe store
    let products = useSelector(state=>state.listProductReducers);
    const prd = useSelector(state=>state.selectProductReducer);
    // initiate the dispatch process
    let dispatch = useDispatch();
  return(
      <div className="container">
      {/* Dispatch the addProduct() action 
       the 'product' object received from the AddProductComponent
       will be passed as input parameter (aka payload) to the addProduct() action
    */}
         <AddProductComponent SelectedRo={prd} AddClick={(product)=> dispatch(addProduct(product))}></AddProductComponent>
         <hr/>
         {/* pass the data received from store 
          received data from teh store will be passed to the 
          ListProductsComponent using props.listProducts
        */}
         <ListProductsComponent  RowClick={(product)=>dispatch(selectProduct(product))} listProducts={products}></ListProductsComponent>
      </div>
  );
}

export default MainComponent;