import React from 'react'
import { Typography } from '@material-ui/core';

class TitleBlock extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <div>
                <Typography variant='h3'> Spices Across the World </Typography>
                <Typography> test </Typography>
            </div>
        )
    }
}

export default TitleBlock;