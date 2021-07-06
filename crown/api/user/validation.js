import Joi from 'joi'


const email = Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
const password = Joi.string().min(8).max(255).required()
const firstName = Joi.string().min(3).required()
const lastName = Joi.string().min(2).required()
const number = Joi.number()
const hobbies = Joi.array().items(Joi.string())
const location = Joi.string().min(10)

export const userCreateSchema = Joi.object({
    firstName,
    lastName,
    number,
    email,
    password,
    hobbies,
    location
})

const updateFields = {
    firstName,
    lastName,
    number,
    email,
    hobbies,
    location
}

export const userUpdateSchema = Joi.object(updateFields).fork(Object.keys(updateFields), (attributes) => attributes.optional())

export const loginSchema = Joi.object({
    email, password
})