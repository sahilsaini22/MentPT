import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,  Switch} from 'react-router-dom'; 
import App from './App';
import Start from './Start';
import End from './End';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
        <Route path="/test" component={App} />                      
        <Route path="/finish" component={End} /> 
        <Route path="/" component={Start} />
        
  </Switch>
  </BrowserRouter>,
    
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
