import React from 'react';

function A(props){
	return(
	<>
		<div className="secondLow">
			<div className="one">
				<img src={props.image1} alt="pic1" className="pic"/>
					<div className="info">
						<span className="category">{props.line1}</span>
						<h3 className="title"> {props.line2} </h3>
					</div>
			</div>
		</div>
	</>

		);
}

export default A;