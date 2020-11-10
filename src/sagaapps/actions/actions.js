// the GET_PRODUCTS if executed successfully will return the GET_PRODUCTS_SUCCESS from
// the SAGA Middleware
export const getProducts =()=> {    
   return {
    type: 'GET_PRODUCTS'
   }  
};

export const saveProduct=(product)=>{
    alert('Save');
    product = {
        ProductId:'P1', ProductName: 'Prd1',
        CategoryName: 'C1', Manufacturer:'M1',
        Description: 'D1', BasePrice:12322
    };
    alert(`Savec ${JSON.stringify(product)}`);
    return {
        type: 'SAVE_PRODUCT',
        product
    }
}