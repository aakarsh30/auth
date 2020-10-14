import React from 'react';
import ReactDOM from 'react-dom';
import './foot.css';
import {Facebook,Google,Twitter,Instagram,Skype} from 'grommet-icons';
import {Box} from 'grommet';
import L6 from '../../Lopard/6.png';
function Footer(){
  return(
    <>
      <div className="three">
      <img src={L6}/>
        <br /><br />
        <span className="tfd">Are you looking for new professional advice for your business. Are you looking for professional advice for your new business. Are you looking for professional advice for your new business.
        </span>
        <br /><br />
        <input className="inn" type="text" placeholder="Type Email" />
        <button className="buu">Subscribe</button>
      </div>
      <div className="three">
        <h2 className="hed1">Services</h2>
        <br />
        <ul className="ll">
          <li>Bussiness</li>
          <li>Agency</li>
          <li>Social Media</li>
          <li>Branding</li>
          <li>Design</li>
        </ul>
        <ul className="ll">
          <li>Search Engine</li>
          <li>Online Support</li>
          <li>Development</li>
          <li>Pay Per Click</li>
          <li>Event</li>
        </ul>
      </div>
      <br />
      <div className="three">
      <h2 className="hed1">Information</h2>
      <br />
      <div><span style={{color:"blue"}}>Tel</span> : +0890-564-5644
            <br /> <span style={{color:"blue"}}>Email</span> : info@lopard3.com
            <br /><span style={{color:"blue"}}>Location</span> : House- 65/4, London
      </div>
      <br /><br />
      <Box direction="row" gap="medium">
            <Facebook color="blue" size="medium" />
      
                

      
      
          <Google color="blue" size="medium"   />
      
      
          <Twitter color="blue" size="medium" /> 
      
      
           <Instagram color="blue" size="medium" /> 
      
      
           <Skype color="blue" size="medium" /> 
        </Box>
      
      </div>
    </>
    );
}
export default Footer;