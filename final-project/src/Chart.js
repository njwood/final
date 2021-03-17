import React from 'react'
import {Typography} from '@material-ui/core'
import data from './data_spices.csv'
const d3 = Object.assign({}, require("d3"))


// Filter function (d3 selection filter) filter based on how the bind is returned 
// Other option is to look at the .class option where each .salt for example has a class
// Coordinates of the lines, where is the center, getting the center of geospatial objects

class Chart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentWillMount() {
        this.drawChart()
    }

    drawChart() {
        // const data = this.props.data;
        //
        // const svg = d3.select("body")
        //     .append("svg")
        //     .attr("width", this.props.width)
        //     .attr("height", this.props.height)
        //     .style("margin-left", 100);
        //
        // svg.selectAll("rect")
        //     .data(data)
        //     .enter()
        //     .append("rect")
        //     .attr("x", (d, i) => i * 70)
        //     .attr("y", (d, i) => this.props.height - 10 * d)
        //     .attr("width", 65)
        //     .attr("height", (d, i) => d * 10)
        //     .attr("fill", "green")

        //--------------------------

        d3.select('body')
            .append('div')
            .attr('id', 'mapDiv')

        const svg = d3.select('#mapDiv')
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)

        const geo_d3 = Object.assign({}, require("d3-geo"), require("d3-geo-projection"))
        let projection = geo_d3.geoMercator()
            .scale(85)
            .translate([svg.width / 2, svg.height / 2 * 1.3])

        // TODO: Switch out for CSV
        let tradeRoute = {type: "LineString", coordinates: [[100, 60], [-60, -30]]}

        let path = d3.geoPath().projection(projection)
        let mapData;
        let spicesData;

        Promise.all([
            // d3.json('data_map.json'),
            d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'),
            d3.csv(data)
        ]).then(([map_data, spices_data]) => {
            mapData = map_data
            readyMap()
            spiceDataSetup(spices_data)
        }).catch(err => console.log('Error loading or parsing data ' + err))

        function spiceDataSetup(rawData) {
                for (let i = 0; i < rawData.length; i++){
                    console.log(rawData[i].Spice)
                }
        }

        function readyMap() {
            // TODO: Switch out for real one
            // Draw the map
            svg.append("g")
                .selectAll("path")
                .data(mapData.features)
                .enter().append("path")
                .attr("fill", "#b8b8b8")
                .attr("d", d3.geoPath()
                    .projection(projection)
                )
                .style("stroke", "#fff")
                .style("stroke-width", 0)
            // Add the path
            // svg.append("path")
            //     .attr("d", path(tradeRoute))
            //     .style("fill", "none")
            //     .style("stroke", "orange")
            //     .style("stroke-width", 7)
        }
    }

    render() {
        return (
            <div id={"#" + this.props.id}>
                <Typography> Test test </Typography>
            </div>
        )
    }
}

export default Chart;