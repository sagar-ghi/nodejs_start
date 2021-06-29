import Joi from 'joi'

export const userSchema = Joi.object({
    username: Joi.string().min(5).required(),
    firstName: Joi.string().min(5),
    lastName: Joi.string().min(2),
    number: Joi.number(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    hobbies: Joi.array().items(Joi.string()),
    password: Joi.string().min(8).max(255)
})
