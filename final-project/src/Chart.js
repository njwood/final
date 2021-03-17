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
        console.log(d3.version)

       d3.select('body')
            .append('div')
            .attr('id', 'mapDiv')

        const svg = d3.select('#mapDiv')
            .append("svg")
            .attr('id', 'mapSVG')
            .attr("width", this.props.width)
            .attr("height", this.props.height)

        const geo_d3 = Object.assign({}, require("d3-geo"), require("d3-geo-projection"))
        let projection = d3.geoAlbers()
            .scale(85)
            .translate([svg.width / 2, svg.height / 2 * 1.3])

        // TODO: Switch out for CSV
        let tradeRoute = {type: "LineString", coordinates: [[100, 60], [-60, -30]]}

        let path = d3.geoPath().projection(projection)
        let mapData;
        let spicesData;

        d3.queue()
            // .defer(d3.json, 'world.json')
            // .defer(d3.json, 'data_map.json')
            .defer(d3.json, 'lastChance.json')
            .await(function (loaded) {
                console.log(loaded)
                mapIsLoaded()
            })

        function mapIsLoaded(error, topo) {
            console.log(error)
            console.log(topo)
            mapData = topo
            makeMap()
        }

        // Promise.all([
        //     // d3.json('data_map.json'),
        //     d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'),
        //     d3.csv(data)
        // ]).then(([map_data,spices_data]) => {
        //     mapData = map_data
        //     makeMap()
        //     spiceDataSetup(spices_data)

        //     /*TODO: When ready switch over to this
        //     mapData = map_data
        //     spiceDataSetup(spices_data).then(readyMap)
        //      */
        //
        // }).catch(err => console.log('Error loading or parsing data ' + err))

        function spiceDataSetup(rawData) {
                for (let i = 0; i < rawData.length; i++){
                    /*
                    let cuisine;
                    let origin;
                    map_data.features function (d) {
                        if (cuisine != null && origin != null) {
                            break;
                        } else {
                            if (d.name = rawData[i].Cuisine) {
                                cuisine = d.coordinates.FIND_CENTROID
                            }
                            if (d.name = rawData[i].Origin) {
                                origin = d.coordinates.FIND_CENTROID
                            }
                        }
                    }
                    spicesData.push([rawData[i].Spice, cuisine, origin])
                     */
                    // console.log(rawData[i].Spice)
                }
        }

        function makeMap() {
            // TODO: Switch out for real one
            // Draw the map
            d3.select('svg').append("g")
                .selectAll("path")
                .data(mapData.features)
                .enter().append("path")
                .attr("fill", "#b8b8b8")
                .style('opacity', 0.3)
                .attr("d", d => {
                    console.log(path(d))
                    return path(d)
                })
                .attr('id', d=> {
                    return d.properties.name
                })
                .style("stroke", "#fff")
                .style("stroke-width", 1)
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