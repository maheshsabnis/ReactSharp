 

// define an action
const addProduct=(product)=>{
     
    // any other logic (except AJAX Calls or any other promise operations)
    return {
        type: "ADD_PRODUCT", // the action that is dispatched 
        product // data that is to be updated in store
    }
}

export default addProduct;