import React from 'react';
import ReactDOM from 'react-dom';
import './secondUp/index.css';
import './secondLow/index2.css';
import './Footer/index3.css';
import App1 from './secondUp/App.js';
import App2 from './secondLow/App.js';
import App3 from './Footer/App3';
import './Our/index4.css';
import App4 from './Our/App4';


ReactDOM.render(
	<>
		<App1 />
		<br/><br/><br/><br/>
		<App2 />
		<br/><br/><br/><br/>
		<App3 />
		<br /><br/><br/><br/>
		<App4 />
	</>
	,document.getElementById('root'));
