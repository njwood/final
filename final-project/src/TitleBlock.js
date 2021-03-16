import React from 'react'
import { CardContent, Container, Typography, Card } from '@material-ui/core';
import './TitleBlock.css';
import Coriander from './img/CorianderSeed.jpg'
import Salt from './img/Salt.webp'
import Tumeric from './img/Tumeric.jpg'

let imageArray = [Coriander, Tumeric, Salt]

var spice = function() {
    var image = imageArray[Math.float((Math.random()*3) + 1)]
    console.log(image)
    return image
}

class TitleBlock extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <div style={{}}>
                <Typography variant='h3' style={{textAlign: 'center', marginTop: '1%'}}> Spices Across the World </Typography>
                <Container fixed maxWidth='sm'>
                    <div id="leftSide" style={{position: 'absolute', left: '0px', width: '50%', marginTop: '3%'}}>
                        <img src={Tumeric} alt="Logo" style={{width: '50%', height: '50%', justifyContent: 'center', display: 'block'}} />
                    </div>
                    <div id="rightSide" style={{position: 'absolute', right: '0px', width: '50%', marginTop: '3%', display:'flex', justifyContent: 'center'}}>
                        <Card style={{}} raised={true}>
                            <CardContent>
                                <Typography variant='h6' style={{}}>
                                    Spices are something that is used by everyone in their daily life. From something as simple as salt and pepper on your eggs to something way more complex
                                    such as cajun seasoning which is a blend of many spices each spice has its own origin and numerous places across the globe that it is used in. Most spices
                                    nowadays have migrated to being used outside of just its native region and have evolved many culinary cuisenes across the globe away from its native area.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}

export default TitleBlock;