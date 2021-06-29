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


//extra rule
// required
// default value

// custom validation
// get
// set


import mongoose from 'mongoose'



const userSchema = new mongoose.Schema({
    username: { type: String, required: true, },
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    number: Number,
    hobbies: [String],
    isBlocked: { type: Boolean, default: false },
    password: { type: String, required: true, },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model('User', userSchema)

export default User

