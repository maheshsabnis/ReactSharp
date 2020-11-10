import React from 'react';
import OrderedListOption from './OrderedListOptions';
import PropTypes from 'prop-types';
function OrderedList(props){
    const {options} = props;
    if(!options.length) {
        return <span className="empty">No Options are generated</span>
    }
    return (
        <ol className="options">
            {
                options.map((option)=>(
                    <OrderedListOption key={option}
                    value={option}>

                    </OrderedListOption>
                ))
            }
        </ol>
    );
}

OrderedList.propTypes = {
    options: PropTypes.array
};

OrderedList.defaultProps = {
    options: []
};




export default OrderedList;