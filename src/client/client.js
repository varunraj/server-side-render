// Startup point for client side code

//below code is to take care async calls inside actions creators
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
// renderRoutes from react-router-config package will convert
// routes in js objects to react component
import {renderRoutes} from 'react-router-config'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import reducers from './reducers'
import axios from 'axios'

// creat a custom axios for client that will call api end point
// which will be routed to actual end point via proxy

// baseURL will append /api to /users so that it will be /api/users
const axiosInstance = axios.create({
     baseURL:'/api',
});


// second parameter is the state object sent from server which will set intial state
// with server side values.

// we also pass axios instance to thunk so that it can be used during action call
const store = createStore(
     reducers, 
     window.INITIAL_STATE, 
     applyMiddleware(thunk.withExtraArgument(axiosInstance))
);


// we are redendering to the same div from index.js
// so that react will enrich dom with all additinal js.

ReactDOM.hydrate(
     <Provider store={store}>
          <BrowserRouter>
               <div>{renderRoutes(Routes)}</div>
          </BrowserRouter>
     </Provider>,
     document.querySelector("#root")
);
