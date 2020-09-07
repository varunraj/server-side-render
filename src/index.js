//below code is to take care async calls inside actions creators
import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';


const app = express();
app.use(express.static('public'));


app.get('*', (req,res)=>{
    
    // logic to add logic and data to store

    const store = createStore();
    //we pass req object to render so that it can be 
    // passed to static router to extract url
    
    res.send(renderer(req, store));
})



app.listen(3000, ()=>{
    console.log('Listening to 3000')
})