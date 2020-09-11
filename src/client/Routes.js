import React from 'react';
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';

// we are going to define routes as Js objects to use
// router confifigure package that will help in ssr

export default [
   {
       ...App, // below routes to be nested inside app.no path tied to this, so always displayed.
       routes: [
        {
            ...HomePage, // this is same as component:HomePage.component
            path:'/',
            exact: true
        },
        {
            ...UsersListPage,
            path:'/users'
            
        },
        {
            ...NotFoundPage // since no path defined, it will show when no path found
        }
       ]
   }
];


