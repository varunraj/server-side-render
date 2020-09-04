import express from 'express';
const app = express();
//react imports
import React from 'react';
// renderToString will generate final html from react components 
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

app.use(express.static('public'));

app.get('/',(req,res)=>{
    const content = renderToString(<Home />);

    const html = `
        <html>
            <head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
            </head>
        <html>
    `
    res.send(html);
})

app.listen(3000, ()=>{
    console.log('Listening to 3000')
})