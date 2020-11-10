// the function that will be executed upon the actions dispatched
// by all objects subscribing to the store
 
const reducer=(state=[], action)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
            // original state will be returned
              return {...state, loading:false};
        case 'GET_PRODUCTS_SUCCESS':
            alert(`In Success Received Data ${JSON.stringify(action.products)}`);
            // the products data received from the AJAX call will be added in state
              return {...state, products:action.products, loading:true};
        case 'SAVE_PRODUCT':
                // original state will be returned
                  return {...state, loading:false};
        case 'SAVE_PRODUCT_SUCCESS':
                alert(`In Success Received Data ${JSON.stringify(action.product)}`);
                // the products data received from the AJAX call will be added in state
                  return {...state, product:action.product, loading:true};      
        default:
            // return the default state
              return state;              
    }
}

export default reducer;