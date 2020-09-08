import React from 'react';
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage';



// we are going to define routes as Js objects to use
// router confifigure package that will help in ssr

export default [
    {
        ...HomePage, // this is same as component:HomePage.component
        path:'/',
        exact: true
    },
    {
        ...UsersListPage,
        path:'/users'
        
    }
];