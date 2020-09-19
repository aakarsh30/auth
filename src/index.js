import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './component/home';
import Sign from './component/sign';
import {Grommet, grommet} from 'grommet';
import { deepMerge } from 'grommet/utils';
import Welcome from './component/welcome';
const theme={
   
   
  formField:{
    border: undefined,
    content:{pad:"large"},
    
  },

};
 
ReactDOM.render(
  <React.StrictMode>
    <Grommet full theme={theme}>
      <BrowserRouter>
        
        <Switch>
          <Route path="/" exact component={App} />  
          <Route path="/home" component={Home}></Route>
          <Route path="/sign" component={Sign} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
