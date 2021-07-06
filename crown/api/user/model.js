
import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    number: Number,
    isBlocked: { type: Boolean, default: false },
    password: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        enum: ['admin', 'moderator']
    },
    location: String,
})

const User = mongoose.model('User', userSchema)

export default User

