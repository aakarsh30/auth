import React from 'react';
import ReactDOM from 'react-dom';
import './secondUp/index.css';
import './secondLow/index2.css';
import App1 from './secondUp/App.js';
import App2 from './secondLow/App.js';
import App3 from './App'



ReactDOM.render(
	<>
		<App1 />
		<br/><br/><br/><br/>
		<App2 />
		<br/>
		<App3 />
	</>
	,document.getElementById('root'));
