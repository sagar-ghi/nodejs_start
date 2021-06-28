const validateUserRegistration = (user) => {
    const userSchema = Joi.object({
        name: Joi.string().min(3).max(30).required().label('Name'),
        // phone: Joi.number().min(3).max(30).required().label('Phone'),
    })
    return userSchema.validate(user)

}

module.exports = validateUserRegistration