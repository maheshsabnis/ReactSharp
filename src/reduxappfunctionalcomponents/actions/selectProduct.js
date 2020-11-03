// define an action
const selectProduct=(product)=>{
     
     
    return {
        type: "SELECT_PRODUCT", // the action that is dispatched 
        product // data that is to be updated in store
    }
}

export default selectProduct;