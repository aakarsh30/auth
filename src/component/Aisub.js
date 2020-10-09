import React from 'react';

import {Box,Heading,Text} from 'grommet';
import '../App.css';

function Aisub(props) {
    

    return (
        <>
            <Box direction="row-responsive" width="100%" gap="medium" >
                
                <Box className="res" justify="center" pad="medium" >
                    <img src={props.image} className="int" ></img>
                </Box>
                <Box className="res" justify="center" >
                <Heading margin="none" level="2" color="black">{props.head} </Heading>
                <Text color="dark-1" margin={{"top":"2%"}}>{props.text}</Text>
                </Box>
                

            </Box>
        </>
    )
}
export default Aisub;
