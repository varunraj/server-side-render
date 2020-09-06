import express from 'express';
import renderer from './helpers/renderer';


const app = express();
app.use(express.static('public'));


app.get('*',(req,res)=>{
    //we pass req object to render so that it can be 
    // passed to static router to extract url
    res.send(renderer(req));
})



app.listen(3000, ()=>{
    console.log('Listening to 3000')
})