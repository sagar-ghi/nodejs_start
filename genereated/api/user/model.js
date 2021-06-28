//database table
//entities
// user
// username,surname

//schema

//types

//String
//Number
//Date
//Boolean
//Array

//ObjectId

//Map
//Buffer
//Mixed

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    number: Number,
    hobbies: [String]
})
//['football','fortnite']

const User = mongoose.model('User', userSchema)

export default User



// class =>blure print
// ghar