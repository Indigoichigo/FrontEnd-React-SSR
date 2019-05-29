import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
// import Home from './components/home';

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector('#root'),
);
