import React from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import WPI from './img/wpi.svg'

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <img src={WPI} alt={'WPI'} style={{maxWidth: 64, maxHeight: 64, marginRight: '31%'}}/>
                        <Typography variant='h3' style={{flexGrow: 1}}> Spices Around the World </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar
