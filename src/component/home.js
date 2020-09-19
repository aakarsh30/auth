import React, {useEffect,useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Box, Form,FormField,TextInput,Button,Anchor} from 'grommet';
import Axios from 'axios';

function Home() {
   const [clk,setclk]=useState(false);
   const [email,setemail] = useState('');
   const[paswd,setpaswd] = useState('');
   const [isloggedin,setloggedin]=useState(false);
    if (isloggedin) return <Redirect to="/welcome" push={false} />

    else {if (clk){
        return <Redirect to="/sign" push={true} />
    }
    else{
        return (
            <Box fill={true}   justify="center"  align="center" background={{color:"dark-1"}}>
                <Box background={{color:"light-2"}} justify="center" round="small" wrap pad="large" margin={{left:"medium",right:"medium"}}>
                    <Form   onSubmit = { ()=> {Axios({
                        method:"POST",
                        data:{
                            email: email,
                            paswd: paswd,
                        },
                        withCredentials: true,
                        url:"http://localhost:4000/login",
                                                    
                        }).then((res)=>{ console.log(res);
                                    //setloggedin(res.data);
                      });
                    }} >
                        <FormField label="Email" name="email" required>
                            <TextInput name="email" value={email} onChange={(event)=> setemail(event.target.value)} />
                        </FormField>
                        <FormField label="Password" name="paswd" required>
                            <TextInput type="password" name="paswd" value={paswd} onChange={(event)=> setpaswd(event.target.value)} />
                        </FormField> 
                        <Box  margin={{top:"small"}}>
                            <Anchor label="Forget Password" color="brand" size="small" alignSelf="end" />
                        </Box>
                        <Box direction="column" justify="center" gap="small" margin={{top:"medium"}} >
                            <Button size="medium" fill={false} type="submit" label="Login" primary color="brand" alignSelf="center" />
                            <Anchor label="Create an account" alignSelf="center" color="brand" size="small" onClick={()=> setclk(!clk)} />

                        </Box>
                    </Form>

                </Box>
            </Box>
        )
    }
  }
}

export default Home;
