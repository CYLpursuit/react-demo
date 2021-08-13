import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Parent from './pages/parent/parent';
import reportWebVitals from './reportWebVitals';
console.log('render');
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/home" component={App}/>
      <Route path="/parent" component={Parent}/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
