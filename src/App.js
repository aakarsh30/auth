import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {Box, Grommet,Button,Heading,Text} from 'grommet';
import './App.css';
import Appheader from './component/Appheader';
import Machinetools from './component/Machinetools';
function App() {
  const [login,setLogin]=useState(false);
  const [sign,setSign]=useState(false);
  if(login){
    return <Redirect to="/home" push={true} />
  
  }
  else if(sign){
    return <Redirect to="/sign" push={true} />
  }
  else{
    return (
    
      
      <Box fill={true} overflow={{horizontal:"hidden",vertical:"auto"}}    background={{color:"light-1"}}  >
        <Appheader />
        
        <Box height={{max:"700px",min:"auto"}} className="fst" direction="row" align="center" justify="between" width="xxlarge" margin={{"top":"5%"}} >
          <Box pad="large">
            <Heading margin="none" level="2" color="black">Build an application  powered by</Heading><Heading margin="none" level="2" color="blue"> Machine Learning</Heading>
            <Text color="dark-1" margin={{"top":"2%"}}>We develop effective plans to move your customers behaviour. customer can be alwayes his profit.</Text>
            <Box width={{max:"30%",min:"50%"}}>
              <Button size="small" margin={{"top":"3%"}} label={<Text color="white" weight="bold">Get In Touch</Text>} color="blue" primary />
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
              <Button size="small" color="#1AA15F" margin={{"top":"3%"}} label={<Text color="white" weight="bold">Learn More</Text>}  primary />
            </Box>

          </Box>
          </div>
          
          
        </Box>


        
        
      </Box>

  
    );
  }
  
}

export default App;
