import React, { Component } from 'react';
import * as d3 from 'd3';
class BarchartNewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.myRef = React.createRef();
        this.dataset = [100,200,300,400,500];
    }
    componentDidMount=()=>{
        alert('ddd');
        let size =  500;
        let svg = d3.select(this.myRef.current)
                    .append("svg")
                    .attr("width",size)
                    .attr("height",size);
        let react_width = 95;
        svg.selectAll('rect')
           .data(this.dataset)
           .enter()
           .append('rect')
           .attr("x",(d,i)=>5 + i * (react_width + 5))
           .attr("y", d=> size - d)
           .attr("width", react_width)
           .attr("height", d=> d)
           .attr("fill", "teal")            

    }
    render() { 
        return (
            <div ref={this.myRef}></div>
        );
    }
}
 
export default BarchartNewComponent;