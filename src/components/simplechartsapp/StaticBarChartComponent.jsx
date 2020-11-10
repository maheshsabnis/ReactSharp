import React, { Component } from 'react';  
// import d3
import * as d3 from 'd3';
class StaticBarChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        // create a react reference for defining
        // SVG eleemnt
        this.svgref = React.createRef();
        this.dataSource = [100,40,20,500,200,600];
    }
    componentDidMount=()=>{
        // define a svg element
        let svg = d3.select(this.svgref.current)
            .append('svg') // append svg element
            .attr("height", 600)
            .attr("width", 600);
        
       // child element for svg to create a chart
       // set the width of bar
       let bar_width = 95;
       // define svg child  to create a chart
       svg.selectAll('rect')
          .data(this.dataSource) // assign data
          .enter() // enter into context of rect
          .append('rect')
          .attr("x", (d,i)=> 5 + i * (bar_width + 5))
          .attr("y", d=> 600 - d)
          .attr("width", bar_width)
          .attr("height", d=>d)
          .attr("fill", "red")

    }
    render() { 
        // ref: is the mechansim to refer the element
        return (
            <div ref={this.svgref}>
                 
            </div>
        );
    }
}
 
export default StaticBarChartComponent;