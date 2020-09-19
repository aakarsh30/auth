import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {Box, Grommet,Button} from 'grommet';
import './App.css';


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
    
      
      <Box fill={true}   justify="center"  align="center" background={{color:"dark-1"}} gap="medium" >
        
          <Button type="submit" color="light-6" primary size="large" label="Login" onClick={()=>{setLogin(true)}}/> 
          <Button type="submit" color="light-6" primary size="large" label="Signin" onClick={()=>{setSign(true)}}/>
        
      </Box>

  
    );
  }
  
}

export default App;
