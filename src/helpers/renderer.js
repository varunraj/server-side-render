import React from 'react';
// to prevent xxr attacks. remove script tags
import serialize from 'serialize-javascript'
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes'
// renderRoutes from react-router-config package will convert
// routes in js objects to react component
import {renderRoutes} from 'react-router-config'
import {Provider} from 'react-redux'

export default (req,store, context) => {

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    // First script tag is to send the state data from server to client inside rendered html which is assigned to window object.

    return `
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        <html>
    `
};