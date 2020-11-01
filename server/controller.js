const { response } = require('express')
const users = require('../users.json')

let id = users[users.length - 1].id + 1 
//this id will dynamically change depending on the last user in the array
//no matter what the id will always be one greater than the last person in the array 

module.exports = {
    getUsers: (request, response) => {
        response.status(200).send(users) //sends the data(users in this example) back to the frontend
    },
    getOneUser: (request, response) =>{
        const {id} = request.params //SAME as request.params.id
    
        if(!id){ //if the ID is falsey, doesn't exist -- this won't fire though, it'll just go to "Unable to find User"
            return response.status(400).send("Unable to find ID")
        }
    
        const foundUser = users.find(user => user.id === +id) 
        //compare the id that is passed in in the URL to make sure it exists in our database
        if(!foundUser) { //if the user does not exist
            return response.status(500).send("Unable to find User")
        }
    
        response.status(200).send(foundUser)
    },

    createUser: () => {
        const {newUser} = request.body 

        newUser.id = id 
        //this will be submitted by the user on the frontend

        id++

        user.push(newUser)

        response.status(201).send(users) 
    },

    updateUser: () => {
        const {updatedUser} = request.body;
        const {id} = request.params;

        const index = users.findIndex(user => user.id === +id)

        if(index === -1){
            return response.status(400).send("User not found")
        }

        users[index] = {...users[index], ...updatedUser};
        //let's reassign the user at index to be a copy of the user information and be overridden by the updatedUser information
        //...updatedUser will override ...users[index] 
        //it can edit any part of the user object 
        //ex: only the last name of the user


    },

    deleteUser: () => {
        const {id} = request.params

        const index = users.findIndex(user => user.id === +id) 
        //same as ellement => element.id === +id
        //if the user id in the list of users matches the id we pass in the parameter, it will find it and store it at the index
        
        if(index === -1){
            return response.status(400).send("User not found")
        }

        //TERNARY VERSION OF ABOVE 
        //return index === -1 ? response.status(400). send("User not found") : null;        
        
        users.splice(index, 1)

        response.status(200).send(users)
    
    }

}