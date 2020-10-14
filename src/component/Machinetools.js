import React from 'react';
import W1 from '../photo/w1.png';
import W2 from '../photo/w2.png';
import W3 from '../photo/w3.png';
import W4 from '../photo/w4.png';
import W5 from '../photo/w5.png';
import {Box,Button,Heading,Text} from 'grommet';
import '../App.css';

function Machinetools(props) {
    

    return (
        <>
        <Box  direction="column"  width="100%" className="cols"  pad="large" background="light-4" justify="center"  >
            <Box direction="row-responsive" justify="center"  >
                <Box background="white" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} width={{min:"313px",max:"313px"}} height={{min:"313px",max:"313px"}} >
                <Heading margin="none" level="4" color="black">Digital agency</Heading><Heading margin="none" level="4" color="blue"> Service & Solutions</Heading>
                <Text color="dark-1" size="small" >Our consultants opt in to the projects they genuinely want to work on.</Text>
                <Box margin={{"top":"15%"}} width="45%">
                <Button  size="small" hoverIndicator="dark-1"  margin={{"top":"3%"}} fill={false} ><Box background="blue" pad="8px" justify='center' align="center" > <Text color="white"  weight="bold">All Solutions</Text></Box></Button>
                </Box>

                </Box>
                <Box background="light-4" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} width={{min:"313px",max:"313px"}} height={{min:"313px",max:"313px"}} >
                <img style={{width:"80px",height:"80px"}} src={W1} ></img>
                <Heading margin="none" level="4" color="black">Data Preparation</Heading>
                <Text color="dark-1" size="small" >Dummy text is also used to demonstrate the appearance of different. consultants opt in to the projects.</Text>
                
                </Box>
                <Box background="white" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} width={{min:"313px",max:"313px"}} height={{min:"313px",max:"313px"}} >
                <img style={{width:"80px",height:"80px"}} src={W2} ></img>
                <Heading margin="none" level="4" color="black">AI Development</Heading>
                <Text color="dark-1" size="small" >Dummy text is also used to demonstrate the appearance of different. consultants opt in to the projects.</Text>
                </Box>
            </Box>
            <Box direction="row-responsive" justify="center"   >
                <Box background="white" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} width={{min:"313px",max:"313px"}} height={{min:"313px",max:"313px"}} >
                <img style={{width:"80px",height:"80px"}} src={W3} ></img>
                <Heading margin="none" level="4" color="black">Digital Ecommerce</Heading>
                <Text color="dark-1" size="small" >Dummy text is also used to demonstrate the appearance of different. consultants opt in to the projects.</Text>
                </Box>
                <Box background="light-4" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} width={{min:"313px",max:"313px"}} height={{min:"313px",max:"313px"}} >
                <img style={{width:"80px",height:"80px"}} src={W4} ></img>
                <Heading margin="none" level="4" color="black">Consumer Technology</Heading>
                <Text color="dark-1" size="small" >Dummy text is also used to demonstrate the appearance of different. consultants opt in to the projects.</Text>
                </Box>
                <Box background="white" border={{color:"white",size:"1px"}} pad={{top:"36px",bottom:"36px",left:"30px",right:"30px"}} width={{min:"313px",max:"313px"}} height={{min:"313px",max:"313px"}} >
                <img style={{width:"80px",height:"80px"}} src={W4} ></img>
                <Heading margin="none" level="4" color="black">Big Data Service</Heading>
                <Text color="dark-1" size="small" >Dummy text is also used to demonstrate the appearance of different. consultants opt in to the projects.</Text>
                </Box>
            </Box>
            
                
        </Box>
            
        </>
    )
}
export default Machinetools;