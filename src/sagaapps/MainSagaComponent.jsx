
import React from 'react';
import GetProductsRequestComponent from './views/GetProductsRequestComponent';
import ListProductsViewComponent from './views/ListProductsViewComponent';
const MainSagaComonent=()=>(
    <div>
        <GetProductsRequestComponent></GetProductsRequestComponent>
        <hr/>
        <ListProductsViewComponent></ListProductsViewComponent>
    </div>
);

export default MainSagaComonent;