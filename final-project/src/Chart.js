import React from 'react' 
import * as d3 from 'd3'
import { Typography } from '@material-ui/core'

// Filter function (d3 selection filter) filter based on how the bind is returned 
// Other option is to look at the .class option where each .salt for example has a class
// Coorindates of the lines, where is the center, getting the center of geospacial objects

class Chart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    componentWillMount() {
        this.drawChart()
    }

    drawChart() {
        const data = this.props.data;
    
        const svg = d3.select("body")
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .style("margin-left", 600)

                    
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => this.props.height - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")
    }

    render() {
        return (
            <div id={"#" + this.props.id}> </div>
        )
    }
}

export default Chart;