import React from 'react';

import {Box,Button,Heading,Text,Carousel,Avatar} from 'grommet';
import {Star,StarHalf} from 'grommet-icons';
import '../App.css';
import R1 from '../photo/r1.jpg';
import R2 from '../photo/r2.jpg';
import R3 from '../photo/r3.jpg';
import R4 from '../photo/r4.jpg';
const Carsoul=(props)=>{
    return(
        <>
        <Box width="100%" pad="large" background="blue" gap="small" round="small" >
            <Box direction="row" gap="medium">
                <Avatar src={props.image} size="large" />
                <Text color="white" size="large" margin={{"left":"2%"}} weight="bold">{props.name}</Text>
            </Box>
            <span><Star color="orange"/><Star color="orange" /><Star color="orange"/><Star color="orange"/><StarHalf color="orange"/></span>
            <Text color="white" margin={{"top":"2%"}}>{props.text}</Text>


        </Box>
        </>
    )
}

function Review(props) {
    

    return (
        <>
            <Box width="xxlarge" height={{max:"800px",min:"auto"}} pad="large" justify="center" background="light-4" >
                <Box  direction="row-responsive" gap="medium" >
                    <Box className="res" justify="center">
                            <Heading margin="none" level="2" color="black">Our customer say </Heading><Heading margin="none" level="2" color="blue"> about our company</Heading><Heading margin="none" level="2" color="black">work</Heading>
                    <Text color="dark-1" margin={{"top":"2%"}}>The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy. The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy</Text>
                    <Box width={{max:"30%",min:"50%"}}>
                    <Button  size="small" hoverIndicator="dark-1"  margin={{"top":"3%"}} fill={false} ><Box background="blue" pad="medium" justify='center' align="center" > <Text color="white"  weight="bold">More Reviews</Text></Box></Button>
                    </Box>

                    </Box>
                    <Box className="res" justify="center" pad="large">
                        <Carousel play={3000} fill controls={false} >
                            <Carsoul image={R1} name="John Snow" text="Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create." ></Carsoul>
                            <Carsoul image={R2} name="Brad Pitt" text="Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create." ></Carsoul>
                            <Carsoul image={R3} name="Sam " text="Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create." ></Carsoul>
                            <Carsoul image={R4} name="Karan" text="Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create." ></Carsoul>

                        </Carousel>

                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Review;