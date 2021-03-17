import React from 'react'
import Chili from './img/Chili.jpeg'
import { Container, Card, CardContent, Typography } from '@material-ui/core'

class Bottom extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Container maxWidth='sm'>
                    <div id="rightSide" style={{position: 'absolute', right: '0px', width: '50%', justifyContent: 'space-between'}}>
                        <img src={Chili} alt="Logo" style={{width: '100%'}} />
                    </div>
                    <div id="leftSide" style={{position: 'absolute', left: '0px', width: '50%', marginTop: '15%', marginLeft: '2.5%'}}>
                        <Typography variant='h6' component={'h2'} style={{}}>
                            Overall, it is interesting to see the migration of spices from its native region to places where it is commonly used within their
                            cuisenes. Non-native spices are used in a plethora of cuisenes across the global and have had major cultural and culinary influences 
                            across the globe, even if the distance from its native area is close or far. In the end, it is important to recognize where something has
                            come from to see how much it is widely used globally.
                        </Typography>
                    </div>
                </Container>
            </div> 
        )
    }
}

export default Bottom