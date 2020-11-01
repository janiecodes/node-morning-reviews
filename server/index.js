const express = require('express');
const app = express();
const users = require('../users.json')

//const app = require('express)() ANOTHER WAY TO WRITE THE ABOVE

const port = 3012;

//MIDDLEWARE (app.use) - Functions that fire after every endpoint; 
//every endpoint that fires has to pass through app.use 
//every axios request that gets to our server, gets turned to json before it hits any of our endpoints

app.use(express.json())

//ENDPOINTS are like the items of a menu; you are defining what your server will respond to
//you cant make a request to your server that does not hit one of your endpoints
//the destination for one of the axios request is one of the endpoints
//inside of the endpoint, we tell the server what to do


//request object to the server 
//response object is what is going to be sent by the endpoint to the front

//endpoint to get all the users
app.get('/api/users', (request, response) => {})
//app.get('/api/users/id') this endpoint is to get the ID of the users



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
