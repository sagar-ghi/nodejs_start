const express = require('express')

const route = express.Router()


//http verbs
//post
//get
//put/patch
//delete

const users = [
    { id: 1, name: 'hari' },
    { id: 2, name: 'ram' },

]
// CRUD operations

// range of error
//200-299 everything is ok
//400-499 invalid 
//500 server error
route.post('/', (req, res) => {
    const { name } = req.body

    const { error } = validateUserRegistration(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let user = { id: users.length + 1, name }
    users.push(user)
    res.send(user)
    // console.log(request.body)

})

route.get('/:id', (req, res) => {
    console.log(req.params)
    // console.log
    const user = users.find(user => user.id === parseInt(req.params.id))
    if (!user) return res.status(404).send("User with this Id doesn't exist on the database")

    res.status(200).send(user)
})

route.put('/:id', (req, res) => {
    const { name } = req.body
    const { id } = req.params

    const index = users.findIndex(user => user.id === parseInt(id))
    console.log(index)
    if (index === -1) return res.status(404).send("User with this Id doesn't exist on the database")

    users[index].name = name

    res.status(200).send(users[index])
})

route.delete('/:id', (req, res) => {
    const { id } = req.params

    const index = users.findIndex(user => user.id === parseInt(id))
    if (index === -1) return res.status(404).send("User with this Id doesn't exist on the database")

    users.splice(index, 1)
    res.send(users)
})

route.get('/', (req, res) => {
    res.send("name")
})

module.exports = route