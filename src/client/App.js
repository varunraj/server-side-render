import React from 'react';
import {renderRoutes} from 'react-router-config'

// App component will get route object since all routes are child of app
// in Routes.js file


const App = ({ route }) => {
    return <div>
        <h1>I am header</h1>
        {renderRoutes(route.routes)}
    </div>
}

export default {
    component: App
}