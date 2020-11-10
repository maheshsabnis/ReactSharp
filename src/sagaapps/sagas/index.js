// the Sagas will provide operator functions to perform following operations
// 1. Monitoring the Action Being Dispatched
// 2. Perform Async calls and subscribe to promise
// 3. Resolve the Promise
// 4. Uses Generator Functions to read the data from resolved promise
// 5. Use Operators to read data and return / dispatch action with data response

// import the Service for Http Calls
import {HttpService} from './../../services/httpservice';

// imports operators from Saga Effects to manage all async operation, subscribe to promise
// read data and respond the data with output actions

// put: return a new output action as a action monitored as input action by SAGA 
// call:  invoke a method that will resolve the promise object
// takeLatest:  read a lates response from the async operations
// all: used to monitor all async operations performed by SAGA middleware read/write 
import {put, all, call, take, takeLatest} from 'redux-saga/effects';

// write a method that will perfrom an async operation
function getProductsData(){
    let serv = new HttpService();
    const response = serv.getData().then((result)=>result.data);
    // resolve the promise object, so that the generator funciton of saga
    // will be able to read data from it
    return Promise.resolve(response);
}

function postProductsData(data){
    alert(`Datab in Post of Saga ${JSON.stringify(data)}`);
    // code to post product
    let serv = new HttpService();
    const response = serv.postData(data).then((result)=>result.data);
    // resolve the promise object, so that the generator funciton of saga
    // will be able to read data from it
    return Promise.resolve(response);
}

// generator function 1, that will subscribe to the promise object and read data
// then it will return / dispatch an output action with response data
function* fetchProductsGenerator(){
   
    const response = yield call(getProductsData);

    // put the response with the output action and data (aka payload) of the action
    yield put({
        type: 'GET_PRODUCTS_SUCCESS',
        products:response || [{error: 'ERROR_OCCURED'}]
    });
}

// generator function 2, monitor an input action dispatched e.g. GET_PRODUCTS 
// and map it with the generator function 1 that is containing the response action dispatch 
function* actionWatcherForInputActionGenerator(){
    // using takeLatest operator , subscribe to the input action
    // and map the input action with Generator Function
    yield takeLatest('GET_PRODUCTS', fetchProductsGenerator); 
}

function* saveProductsGenerator(){
    alert(`Save {Product Generator Caslled  1}`);
    // read an input parameter for the action
    const parameters = yield take('SAVE_PRODUCT');
    alert(`Datab in saveProductsGenerator Saga ${JSON.stringify(parameters.product)}`);
    const response = yield call(postProductsData, parameters.product);
    alert(`In Success of saveProductsGenerator ${JSON.stringify(response)} `)
    // put the response with the output action and data (aka payload) of the action
    yield put({
        type: 'SAVE_PRODUCT_SUCCESS',
        product:response || [{error: 'ERROR_OCCURED'}]
    });
}

function* actionWatcherForInputActionGeneratorSaveProduct(){
    alert(`Save {Product Generator Caslled  2}`);
    // using takeLatest operator , subscribe to the input action
    // and map the input action with Generator Function
    yield takeLatest('SAVE_PRODUCT', saveProductsGenerator); 
}



// complete the SAGA middleware to export all SAGAs generator functions so that
// redux store can use it
export default function* rootSaga(){
    yield all([actionWatcherForInputActionGenerator(),actionWatcherForInputActionGeneratorSaveProduct()]);
}  