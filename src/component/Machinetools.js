import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {Box, Grommet,Button,Heading,Text,Grid} from 'grommet';
import '../App.css';

function Machinetools(props) {
    

    return (
        <>
        <Box direction="column"  width="100%" className="cols"  pad="large" background="light-4" justify="center"  >
            <Box direction="row-responsive"   >
                <Box background="white" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} >
                <Heading margin="none" level="4" color="black">Digital agency</Heading><Heading margin="none" level="4" color="blue"> Service & Solutions</Heading>
                <Text color="dark-1" size="small" >Our consultants opt in to the projects they genuinely want to work on.</Text>
                </Box>
                <Box background="light-4" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} >
                <Heading margin="none" level="4" color="black">Data Preparation</Heading>
                <Text color="dark-1" size="small" >Dummy text is also used to demonstrate the appearance of different. consultants opt in to the projects.</Text>
                </Box>
                <Box background="white" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} >
                <Heading margin="none" level="4" color="black">AI Development</Heading>
                <Text color="dark-1" size="small" >Dummy text is also used to demonstrate the appearance of different. consultants opt in to the projects.</Text>
                </Box>
            </Box>
            <Box direction="row-responsive"   >
                <Box background="white" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} >
                <Heading margin="none" level="4" color="black">Digital Ecommerce</Heading>
                <Text color="dark-1" size="small" >Dummy text is also used to demonstrate the appearance of different. consultants opt in to the projects.</Text>
                </Box>
                <Box background="light-4" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} >
                <Heading margin="none" level="4" color="black">Consumer Technology</Heading>
                <Text color="dark-1" size="small" >Dummy text is also used to demonstrate the appearance of different. consultants opt in to the projects.</Text>
                </Box>
                <Box background="white" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} >
                <Heading margin="none" level="4" color="black">Big Data Service</Heading>
                <Text color="dark-1" size="small" >Dummy text is also used to demonstrate the appearance of different. consultants opt in to the projects.</Text>
                </Box>
            </Box>
            
                
        </Box>
            
        </>
    )
}
export default Machinetools;