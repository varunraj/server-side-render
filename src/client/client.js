// Startup point for client side code

import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

// we are redendering to the same div from index.js
// so that react will enrich dom with all additinal js.

ReactDOM.hydrate(
    <BrowserRouter>
         <Routes />
    </BrowserRouter>,
     document.querySelector("#root")
);
