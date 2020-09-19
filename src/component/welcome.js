import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {DateInput,Text,Box, Form,FormField,TextInput,Button,Anchor,RadioButtonGroup} from 'grommet';
import Axios from 'axios';
import '../App.css';
function Welcome() {
     return (
        <Box fill={true}   justify="center"  align="center" background={{color:"dark-1"}}>
            <Text>Welcome </Text>

        </Box>
         
             
         
     )
}
export default Welcome;
 