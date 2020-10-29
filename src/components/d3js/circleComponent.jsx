import * as d3 from 'd3';
import  { svg } from 'd3';
import React, { useRef, useEffect } from 'react';

const Circle =()=>{
    const ref = useRef();
    useEffect(()=>{
        const svgElement =  d3.select(ref.current);
        svgElement.append('circle').attr("cx",300).attr("cy",100).attr("r", 40)
    },[]);
    
    return(
        <div className="container">
            <svg>
                <circle
                cx="250"
                cy="77"
                r="40"
                ></circle>
            </svg>
            <hr/>
            <svg ref={ref}></svg>
        </div>
        
    );
}

export default Circle;