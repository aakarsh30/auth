import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {DateInput,Text,Box, Form,FormField,TextInput,Button,Anchor,RadioButtonGroup} from 'grommet';
import Axios from 'axios';
import '../App.css';
  

function Sign() {
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [paswd,setpaswd]=useState('');
    const [conpaswd,setconpaswd]=useState('');
    const [gen,setgen]=useState('');
    const [dob,setdob]=useState('');
    const [loggedin,setloggedin]=useState(false);
    if(loggedin) return <Redirect to="/welcome" push={false}></Redirect>
    else
    {
        return (
        <Box fill={true}   justify="center"  align="center" background={{color:"light-1"}}>
            <Box background={{color:"light-2"}} justify="center" round="small" pad="large" margin={{top:"medium",left:"medium",right:"medium"}} >
                
                    <Form  onSubmit={()=>{Axios({
                                                    method: 'POST',
                                                    data:{
                                                        name: name,
                                                        email: email,
                                                        paswd: paswd,
                                                        gen: gen,
                                                        
                                                    },
                                                    withCredentials: true,
                                                    url:"http://localhost:4000/register",
                                                    
                                                }).then((res)=>{ console.log(res.data);
                                                                    setloggedin(res.data);
                                                });
                                        }}  >
                        <FormField label="Name" name="name">
                            <TextInput name="name" value={name} onChange={event=> setname(event.target.value)} required />
                        </FormField>
                        <FormField label="Email" name="email"   >
                            <TextInput name="email" value={email}  onChange={event=> setemail(event.target.value)} type="email" required />
                        </FormField>
                        <FormField label="Password" name="paswd"  >
                            <TextInput type="password" name="paswd" value={paswd} onChange={event=> setpaswd(event.target.value)} required/>
                        </FormField>
                        <FormField label="Confirm Password" name="conpaswd" validate={()=>{if(paswd!==conpaswd)return{message:"Password are not same",status:"error"};
                                                                                                                                                                    else return undefined;                 }} >
                            <TextInput type="password" name="conpaswd" value={conpaswd} onChange={event=> setconpaswd(event.target.value)} required  />
                        </FormField>
                        <FormField label="Gender" name="gen" required >
                            <RadioButtonGroup name="gen" options={["Male","Female"]} value={gen} onChange={event=> setgen(event.target.value)} />

                        </FormField>
                        <FormField label="Date Of Birth" name="dob"  required>
                            <DateInput  name="dob" value={dob} format="dd/mm/yyyy" onChange={event=> setdob(event.value)} />
                        </FormField>
                        <Box direction="column" justify="center" gap="small" margin={{top:"medium"}} >
                            <Button size="medium" fill={false} type="submit" label="Sign-in" primary color="brand" alignSelf="center" />
                                

                        </Box>
                    </Form>
                

            </Box>
            
        </Box>
    )
    }
}

export default Sign;
