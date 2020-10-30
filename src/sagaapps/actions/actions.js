// the GET_PRODUCTS if executed successfully will return the GET_PRODUCTS_SUCCESS from
// the SAGA Middleware
export const getProducts =()=> {    
   return {
    type: 'GET_PRODUCTS'
   }  
};

export const saveProduct=(product)=>{
    return {
        type: 'SAVE_PRODUCT',
        product
    }
}