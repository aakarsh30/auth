import React,{useState} from 'react';

import {Box,Button,Heading,Text} from 'grommet';
import './App.css';
import Appheader from './component/Appheader';
import Machinetools from './component/Machinetools';
import Ai from './component/Ai';
import Review from './component/review';
import Seclow from './othercomponent/secondLow/secondlow';
import Foot from './othercomponent/src/Footer/footer';
import Our from './othercomponent/src/Achv';
function App() {
    return (
    
      
      <Box fill={true} overflow={{horizontal:"hidden",vertical:"auto"}}    background={{color:"light-1"}}  >
        <Appheader />
        
        <Box height={{max:"700px",min:"auto"}} className="fst" direction="row" align="center" justify="between" width="xxlarge" margin={{"top":"5%"}} >
          <Box pad="large">
            <Heading margin="none" level="2" color="black">Build an application  powered by</Heading><Heading margin="none" level="2" color="blue"> Machine Learning</Heading>
            <Text color="dark-1" margin={{"top":"2%"}}>We develop effective plans to move your customers behaviour. customer can be alwayes his profit.</Text>
            <Box width={{max:"30%",min:"50%"}}>
            <Button  size="small" hoverIndicator="dark-1"  margin={{"top":"3%"}} fill={false} ><Box background="blue" pad="small" justify='center' align="center" > <Text color="white"  weight="bold">Get In Touch</Text></Box></Button>
            </Box>

          </Box>
          <div className="image">
          <Box >
            <img style={{width:"600px",height:"300px",minWidth:"200px",minHeight:"150px"}} src="/s1.png" ></img>
          </Box>
          </div>
        </Box>
        <Box  direction="row-responsive" height={{max:"700px",min:"auto"}} align="center" justify="between" width="xxlarge" margin={{"top":"5%"}} >
          <div className="dimg">
        <Box  >
            <img style={{width:"400px",height:"300px"}}  src="/ab.png" ></img>
          </Box>
          </div>
          <div className="detail">
          <Box    pad="large">
            <Heading margin="none" level="3" color="black">About our Machine Learning </Heading><Heading margin="none" level="3" color="blue"> software firm.</Heading>
            <Text color="dark-1" margin={{"top":"2%"}}>Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</Text>
            <Box width={{max:"30%",min:"50%"}}>
            <Button  size="small" hoverIndicator="dark-1"  margin={{"top":"3%"}} fill={false} ><Box background="blue" pad="small" justify='center' align="center" > <Text color="white"  weight="bold">Learn More</Text></Box></Button>
            </Box>

          </Box>
          </div>
          
          
        </Box>
        <div className="cols">
          <Machinetools />
        </div>
        <div className="ai">
          <Ai />

        </div>
        <div className="our">

          <Our />
        </div>


        
        <div className="ai">
          <Review />
        </div>
        <div className="ai">
          <Seclow />
        </div>
        <div className="ai">
          <Foot />
        </div>




        
        
      </Box>

  
    );
  
  
}

export default App;
