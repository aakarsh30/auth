import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Grommet} from 'grommet';


const theme={
   
  formField:{
    border: undefined,
    content:{pad:"large"},
    
  },

};
 
ReactDOM.render(
  <React.StrictMode>
    <Grommet full theme={theme}>
      
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
