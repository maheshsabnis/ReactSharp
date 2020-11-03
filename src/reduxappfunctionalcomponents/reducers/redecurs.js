// add redecur functions. These will be pure fucntions to update store

import addProduct from './../actions/actions';
import {combineReducers} from 'redux'; 
// the first parameter is state with the default value
// the second paarmeetr is the action that will be listened 
// by the reducer fucntion. The action returns 'type' based
// on which the reducer will process state in store 
export const addProductReducer=(state,action) =>{
  //  alert('Add Product Reducer');
  switch(action.type) {
     case 'ADD_PRODUCT': 
        return {
            product: action.product // the state to be added in store
        }
      default: 
        return state; // else return the default state from  store  
  }
}
export const selectProductReducer=(state,action) =>{
  //  alert('Add Product Reducer');
  switch(action.type) {
     case 'SELECT_PRODUCT': 
        return {
            product: action.product // the state to be added in store
        }
      default: 
        state = {}
        return state; // else return the default state from  store  
  }
}

export const listProductReducers=(state=[], action)=>{
   // alert('List Product Reducer');
    switch(action.type) {
        case 'ADD_PRODUCT': 
                // return an arrau of products from the store
                return [...state, addProductReducer(undefined, action)]; 
           
         default: 
           return state; // else return the default state from  store  
     }
}

// combine all reducer functions in a single object
const rootReducer = combineReducers({listProductReducers,selectProductReducer});
export default rootReducer;