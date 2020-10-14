import React from 'react';
import ReactDOM from 'react-dom';
import './achv.css';
import I1 from '../Lopard/i.png';
import I2 from '../Lopard/ii.png';
import I3 from '../Lopard/iii.png';
import I4 from '../Lopard/iv.png';
import I5 from '../Lopard/v.png';
import I6 from '../Lopard/vi.png';
import I7 from '../Lopard/vii.png';
import I8 from '../Lopard/viii.png';
function Our(){
  return(
    <>
    <h1 className="hee">Our Achievement</h1>
    <br></br>
    <div className="d1">Dummy text is also used to demonstrate the appearance of different <br/> typefaces and layouts</div>
    <div className="bl">
    <img src={I1} className="iii"/>
    <div className="hhh">10+</div>
    <div className="tex">Years Experience</div>
    </div>
        <div className="bl">
    <img src={I2} className="iii"/>
    <div className="hhh">07</div>
    <div className="tex">Offices Worldwide</div>
        </div>
        <div className="bl">
    <img src={I3} className="iii"/>
    <div className="hhh">400+</div>
    <div className="tex">Experts Team</div>
    </div>

<hr/>
    <div className="fd">
    <img src={I4} className="jjj" />
    <div className="texx">Industries & Manufacturing</div>
    </div>
        <div className="fd">
    <img src={I5} className="jjj" />
    <div className="texx">Automobile & Transportation</div>
    </div>
        <div className="fd">
    <img src={I6} className="jjj" />
    <div className="texx">Food &<br />Agriculture</div>
    </div>
        <div className="fd">
    <img src={I7} className="jjj" />
    <div className="texx">Health & Humanbody</div>
    </div>
        <div className="fd">
    <img src={I8} className="jjj" />
    <div className="texx">Media & Entertainment</div>
    </div>
    </>


    )
}

export default Our;