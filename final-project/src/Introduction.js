import React from 'react'
import { Container, Typography, Card, CardContent, CardMedia } from '@material-ui/core'
import Tumeric from './img/Tumeric.jpg'
import Salt from './img/Salt.webp' 
import CorianderSeed from './img/CorianderSeed.jpg'

class Introduction extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Container maxWidth='sm'>
                    <div id="rightSide" style={{position: 'absolute', left: '0px', width: '50%', marginTop: '1%', justifyContent: 'space-between'}}>
                        <img src={CorianderSeed} style={{width: '80%'}}/>
                    </div>
                    <div id="leftSide" style={{position: 'absolute', right: '0px', width: '50%', marginTop: '6%', marginRight: '5%', display:'flex', justifyContent: 'center'}}>
                        <Typography variant='h6' component={'h2'} style={{}}>
                            Spices are something that is used by everyone in their daily life. From something as simple as salt and pepper on your eggs to something way more complex
                            such as cajun seasoning which is a blend of many spices each spice has its own origin and numerous places across the globe that it is used in. Most spices
                            nowadays have migrated to being used outside of just its native region and have evolved many culinary cuisenes across the globe away from its native area.
                        </Typography>
                    </div>
                </Container>
            </div> 
        )
    }
}

export default Introduction