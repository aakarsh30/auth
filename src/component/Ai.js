import React,{useState} from 'react';

import {Box,Heading} from 'grommet';
import '../App.css';
import Aisub from './Aisub';
import Comp from '../photo/comp.png';
import Ss from '../photo/s2.png'; 
import St from '../photo/s3.png';
import Sf from '../photo/s4.png';
const arobj =[{
    image: Comp,
    head: "Enterprise AI and data platform solutions",
    text: "Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical"
},
{
    image: Ss,
    head: "Design and development use latest technology",
    text: "And in general the content of dummy text is nonsensical. used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Dummy text is also used to demonstrate the appearance of different typefaces and layouts"
},
{
    image: St,
    head: "Artificial intelligence use in automobile industry",
    text: "Used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical"
},
{
    image: Sf,
    head: "machine learning platform used cloud deployment",
    text: "Dummy text is also used. used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensica to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical."
}];
function Ai() {
    const [image,setimage]=useState(arobj[0].image);
    const [head,sethead]= useState(arobj[0].head);
    const [text,settext]=useState(arobj[0].text);
    const [col1,setcol1] =useState("#1AA15F");
    const [col2,setcol2] =useState("white");
    const [col3,setcol3] =useState("white");
    const [col4,setcol4] =useState("white");

    return (
        <>
            <Box height={{min:"auto"}} width="xxlarge" background="white" pad="large" gap="medium" direction="column" justify="center"  >
                <Box width="100%"  direction="row-responsive" pad="large" justify="center" align="center" >
                    <Box width="233px" height={{max:"94px",min:"94px"}} onClick={()=> {setimage(arobj[0].image); sethead(arobj[0].head); settext(arobj[0].text); setcol1("#1AA15F"); setcol2("white");setcol3("white");setcol4("white");}} background={col1} justify="center" align="center">
                    <Heading margin="none" level="5" color="black">Research & Solutions </Heading>

                    </Box>
                    <Box width="233px" height={{max:"94px",min:"94px"}} onClick={()=> {setimage(arobj[1].image); sethead(arobj[1].head); settext(arobj[1].text); setcol1("white"); setcol2("#1AA15F");setcol3("white");setcol4("white");}} background={col2} justify="center" align="center">
                    <Heading margin="none" level="5" color="black">Design & Strategy </Heading>

                    </Box>
                    <Box width="233px" height={{max:"94px",min:"94px"}} background={col3} justify="center" onClick={()=> {setimage(arobj[2].image); sethead(arobj[2].head); settext(arobj[2].text); setcol1("white"); setcol2("white");setcol3("#1AA15F");setcol4("white");}} align="center">
                    <Heading margin="none" level="5" color="black">Artificial Intelligence </Heading>

                    </Box>
                    <Box width="233px" height={{max:"94px",min:"94px"}} background={col4} justify="center" onClick={()=> {setimage(arobj[3].image); sethead(arobj[3].head); settext(arobj[3].text); setcol1("white"); setcol2("white");setcol3("white");setcol4("#1AA15F");}} align="center">
                    <Heading margin="none" level="5" color="black">Cloud Deployment </Heading>

                    </Box>
                    




                </Box>
                <Box  width="100%">
                    <Aisub image={image} head={head} text={text} ></Aisub>
                </Box>
                
            </Box>
        </>
    )
}
export default Ai;