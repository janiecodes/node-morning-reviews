const express = require('express');
const app = express();

const ctrl = require('./controller')

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

//THIS IS THE BACKEND SERVER SIDE DEVELOPMENT
//the request object is the request to the server 
//response object is what is going to be sent by the endpoint to the front

//endpoint to get all the users
app.get('/api/users', ctrl.getUsers)

// app.get('/api/users', (request, response) => {
//     response.status(200).send(users) //sends the data(users in this example) back to the frontend
// })
//ANOTHER EXAMPLE OF GET: app.get('/api/users/id') this endpoint is to get the ID of the users

//endpoint to get ONE user (the parameter differentiates from the first GET axios request)
app.get('api/users/:id', ctrl.getOneUser)

// app.get('api/users/:id', (request, response) =>{
//     const {id} = request.params //SAME as request.params.id

//     if(!id){ //if the ID is falsey, doesn't exist -- this won't fire though, it'll just go to "Unable to find User"
//         return response.status(400).send("Unable to find ID")
//     }

//     const foundUser = users.find(user => user.id === +id) 
//     //compare the id that is passed in in the URL to make sure it exists in our database
//     if(!foundUser) { //if the user does not exist
//         return response.status(500).send("Unable to find User")
//     }

//     response.status(200).send(foundUser)
// })

//SAME URL USED IN ALL THREE EXAMPLES
//QUERY SYNTAX EXAMPLE (key and value are both in the axios request)
//axios.post('/api/users?name=cole')
//To send more info in the query, it makes the URL really long
//Query is useful for sending data that isn't required
// app.post('/api/users', (request, response) => {
//     const {name} = request.query
// })

//PARAMS SYNTAX EXAMPLE (value is in the axios request but the key is in the endpoint)
//axios.post('/api/users/cole)
//params is part of the URL - only access this endpoint if the parameter is present
//it's looking for the name and wont fire the endpoint unless there is a name
//Parameter requires the data unlike Query
// app.post('/api/users/:name', (request, response) => {
//     const {name} = request.params
// })

//BODY SYNTAX EXAMPLE
//easier to send multiple pieces of data through the body
//more secure 
//not all axios requests can send a body - only POST and PUT
//DELETE and GET cant send a body
//{name: cole, age: 28}
//axios.post('/api/users', {name:cole})
// app.post('/api/users', (request, response) => {
//     const {name} = request.body
// })

app.post('/api/users', ctrl.createUser);
app.put('/api/users/:id', ctrl.updateUser);
app.delete('api/users/:id', ctrl.deleteUser);



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
