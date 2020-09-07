// Startup point for client side code

//below code is to take care async calls inside actions creators
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk));


// we are redendering to the same div from index.js
// so that react will enrich dom with all additinal js.

ReactDOM.hydrate(
     <Provider store={store}>
          <BrowserRouter>
               <Routes />
          </BrowserRouter>
     </Provider>,
     document.querySelector("#root")
);
