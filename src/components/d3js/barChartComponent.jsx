import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount=()=>{
        this.drawChart();
    }

    drawChart=()=>{
        const data =[12,34,5,6,7,12,45,67,88];
        const svg = d3.select('body')
                      .append('svg')
                      .attr("width", 700).attr("height", 300);
          svg.selectAll("rect")
                      .data(data)
                      .enter()
                      .append("text")
                       .attr("x", (d, i) => i * 70)
                      .attr("y", 0)
                      .attr("width", 25)
                      .attr("height", (d, i) => d)
                      .attr("fill", "green");            
    }
    render() { 
        return (
            <div className="container">
                    <div id={"#" + this.props.id}></div>
            </div>
        );
    }
}
 
export default BarChartComponent;