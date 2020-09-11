import React from 'react';
import {renderRoutes} from 'react-router-config'
import Header from './components/Header'
import { fetchCurrentUsers} from './actions'

// App component will get route object since all routes are child of app
// in Routes.js file


const App = ({ route }) => {
    return (
    <div>
        <Header />
        {renderRoutes(route.routes)}
    </div>
    )
}

export default {
    component: App,
    loadData: ({dispatch}) => {return dispatch(fetchCurrentUsers())}
}