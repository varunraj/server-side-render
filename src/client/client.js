// Startup point for client side code

import React from 'react';
import ReactDOM from 'react-dom'
import Home from './components/Home'

// we are redendering to the same div from index.js
// so that react will enrich dom with all additinal js.

ReactDOM.hydrate(
    <Home />,
     document.querySelector("#root")
);
