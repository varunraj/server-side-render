//below code is to take care async calls inside actions creators
import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes'
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';


const app = express();

// use the middleare to send any path /api to the api server
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = 'localhost:3000';
            return opts;
        }
    } 
))

app.use(express.static('public'));


app.get('*', (req,res)=>{
    
    // logic to add logic and data to store

    // we pass req object to createstore to get the cookie
    // details of cookie

    const store = createStore(req);
    
    // below code will look routes and match with incoming req path
    // then it knows which all componets to render 
    // we are finding components to render for a path so that data fetch
    // cab be done in advance.

    // we then map over loaddata functions from mathed routes and invoke it
    // console.log matchroute ouput to see what is in route object

    const promises = matchRoutes(Routes, req.path).map(({route})=>{
        return route.loadData ? route.loadData(store) : null;
    })

    // promise array contains a list of promises. Pass it to promise.all 
    // which will resolve all promises and invoke then.
    Promise.all(promises).then(()=>{
        res.send(renderer(req, store));
    })

    
})



app.listen(3000, ()=>{
    console.log('Listening to 3000')
})