import React from 'react';
import Lopard from '../photo/lopard.jpg';
import {Anchor,Box,Button,Text,Accordion,AccordionPanel,DropButton} from 'grommet';
import '../App.css';
import {Mail,Phone,Clock,Menu,Skype,Facebook,Google,Twitter} from 'grommet-icons';

function Appheader() {
    

    return (
        <>
        <div className="top">
        <Box animation={{type:"fadeIn",duration:4000}} direction="row" align="center" justify="between">
            <Box direction="row" align="center" className="topcmp" >
               <Anchor><Mail color="blue" size="medium" />
                <Text margin={{"left":"4px","right":"10px"}} size="small">aakarshsaxenasup@gmail.com</Text></Anchor> 
                <Anchor><Phone color="blue" size="medium" />
                <Text margin={{"left":"4px","right":"10px"}} size="small">9821717789</Text></Anchor> 
                <Anchor><Clock color="blue" size="medium" />
                <Text margin={{"left":"4px","right":"10px"}} size="small">Mon-Fri 10:00-18:00</Text></Anchor> 
                

            </Box>
            <Box direction="row" gap="medium" margin={{"right":"3%"}}>
            <Anchor> <Skype color="blue" size="medium" /></Anchor> 
                <Anchor> <Facebook color="blue" size="medium" /></Anchor> 
                <Anchor> <Google color="blue" size="medium" /></Anchor> 
                <Anchor> <Twitter size="medium" color="blue" /></Anchor> 

            </Box>

        </Box>
            
        </div>
        <Box animation={{type:"fadeIn",duration:4000}} height={{max:"160px",min:"auto"}} className="head" direction="row" align="center" justify="between" background="light-1"  margin={{top:"17px"}}>
            <Box margin={{left:"8%"}}>
            <Anchor> <img src={Lopard} ></img></Anchor> 
            </Box>
            <div className="headlink">
            <Box direction="row" margin={{"right":"4%"}} align="center" gap="medium">
            <DropButton dropProps={{align:{top:'bottom',right:'right'}}}   dropContent={<Box width="small" background="light-4" direction="column" gap="medium" pad="small">
                <Anchor><Text  color="black" weight="bold" >Home-1</Text></Anchor>
                <Anchor><Text  color="black" weight="bold" >Home-1</Text></Anchor>
                <Anchor><Text  color="black" weight="bold" >Home-1</Text></Anchor>
                <Anchor><Text  color="black" weight="bold" >Home-1</Text></Anchor>

            </Box>}><Text  color="black" weight="bold" >Home</Text></DropButton>
            <DropButton dropProps={{align:{top:'bottom',right:'right'}}}   dropContent={<Box width="small" background="light-4" direction="column" gap="medium" pad="small">
                <Anchor><Text  color="black" weight="bold" >Page-1</Text></Anchor>
                <Anchor><Text  color="black" weight="bold" >Page-2</Text></Anchor>
                <Anchor><Text  color="black" weight="bold" >Page-3</Text></Anchor>


            </Box>}><Text  color="black" weight="bold" >Pages</Text></DropButton>
            <DropButton dropProps={{align:{top:'bottom',right:'right'}}}   dropContent={<Box width="small" background="light-4" direction="column" gap="medium" pad="small">
                <Anchor><Text  color="black" weight="bold" >Service-1</Text></Anchor>
                <Anchor><Text  color="black" weight="bold" >Service-2</Text></Anchor>
            
            </Box>}><Text  color="black" weight="bold" >Services</Text></DropButton>
            <DropButton dropProps={{align:{top:'bottom',right:'right'}}}   dropContent={<Box width="small" background="light-4" direction="column" gap="medium" pad="small">
                <Anchor><Text  color="black" weight="bold" >Blog-1</Text></Anchor>
                <Anchor><Text  color="black" weight="bold" >Blog-2</Text></Anchor>

            </Box>}><Text  color="black" weight="bold" >Works</Text></DropButton>
            <DropButton dropProps={{align:{top:'bottom',right:'right'}}}   dropContent={<Box width="small" background="light-4" direction="column" gap="medium" pad="small">
                <Anchor><Text  color="black" weight="bold" >Work-1</Text></Anchor>
                <Anchor><Text  color="black" weight="bold" >Work-1</Text></Anchor>

            </Box>}><Text  color="black" weight="bold" >Blog</Text></DropButton>
            <Anchor><Text  color="black" weight="bold" >Contact</Text></Anchor>

                <Button label={<Text color="white" ><span>Get Estimate</span></Text>} color="blue" primary />
            </Box>
            </div>
            <div className="headmenu">
                <DropButton dropProps={{align:{top:'bottom',right:'right'}}} margin={{right:"8vh"}}  dropContent={<Box width="xxlarge" background="light-4" direction="column" gap="large"   pad={{left:"8%",top:"5%"}}>
                <Accordion  multiple>
                    <AccordionPanel  label="Home" >
                        <Box background="light-4" >
                            some
                        </Box>
                    </AccordionPanel>
                </Accordion>
                <Accordion  multiple>
                    <AccordionPanel label="Pages" >
                        <Box background="light-4" >
                            some
                        </Box>
                    </AccordionPanel>
                </Accordion>
                <Accordion  multiple>
                    <AccordionPanel label="Services" >
                        <Box background="light-4" >
                            some
                        </Box>
                    </AccordionPanel>
                </Accordion>
                <Accordion  multiple>
                    <AccordionPanel label="Works" >
                        <Box background="light-4" >
                            some
                        </Box>
                    </AccordionPanel>
                </Accordion>
                <Accordion  multiple>                    
                    <AccordionPanel label="Blog" >
                        <Box background="light-4" >
                            some
                        </Box>
                    </AccordionPanel>
                </Accordion>
                <a style={{margin:{top:"4%"}}}><Text  color="black" weight="bold" >Contact</Text>  </a>
                    

                </Box>}><Menu color="black" size="medium" /></DropButton>
            </div>

        </Box>
        </>
    )
}
export default Appheader;