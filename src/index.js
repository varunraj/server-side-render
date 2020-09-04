import express from 'express';
const app = express();
//react imports
import React from 'react';
// renderToString will generate final html from react components 
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';


app.get('/',(req,res)=>{
    const content = renderToString(<Home />);
    res.send(content);
})

app.listen(3000, ()=>{
    console.log('Listening to 3000')
})