import React, { useEffect, useState } from 'react';

const UseEffectMouseMoveComponent=()=>{
    const [x, setX] =useState(0);
    const [y, setY] =useState(0);

    const detectMousePosition=(evt)=>{
        console.log(`x = ${x} && y = ${y}`);
        setX(evt.clientX);
        setY(evt.clientY);
    }

    // use the uaseEffect hooks to register the mousemove event
    // with window object

    useEffect(()=>{
        // the code before return is like componentDidMount()
        console.log('mouse move event called');
        // registering the event (void implmentation)
        window.addEventListener('mousemove', detectMousePosition);
        // de-register the event using the destructor method
        return()=>{
            // execution like componentWillUnmount
            console.log('mouse move event released');
            window.removeEventListener('mousemove', detectMousePosition);
        }
    },[]); 
    // --> depednency array which will make sure that the useEffect will perform 
    // --> operations properly, means that the useEffect code will be executed
    // --> only for the first state change and then it will stop 


    return (
        <div>
          Use Effect x == {x} && y == {y}
        </div>
    );

}

export default UseEffectMouseMoveComponent;