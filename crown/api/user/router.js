import { Router } from 'express'
import argon from 'argon2'

import User from './model.js';
import { loginSchema, userCreateSchema, userUpdateSchema } from './validation.js';
import { inputValidator } from '../../middleware/inputValidator.js';

const router = Router()

//user create
router.post('/register', [inputValidator(userCreateSchema)], async (req, res) => {

    const existingUser = await User.findOne({ email: req.body.email })
    if (existingUser) return res.status(400).send("User with this email already exist!")

    req.body.password = await argon.hash(req.body.password)

    const user = new User(req.body)
    await user.save()

    res.send(user)

})

router.post('/login', inputValidator(loginSchema), async (req, res) => {

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send("Invalid email/password")

    const isValidPassword = await argon.verify(user.password, req.body.password)
    if (!isValidPassword) return res.status(400).send('Invalid email/password')

    res.send("Successfully logged In")
})

router.get('/paginated', async (req, res) => {
    const users = await User.find().and([{ id: 10, }, { website: "ambrose.net" }])
    res.send(users)

})

//put
router.put('/update/:id', inputValidator(userUpdateSchema), async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
    if (!user) return res.status(404).send("User with this Id doesn't exist")

    res.send(user)

})

router.delete('/delete/:id', async (req, res) => {
    const result = await User.deleteOne({ _id: req.params.id })
    if (!result) return res.status(404).send("User with this Id doesn't exist")
    res.send(result)
})

router.post('/reset-password', async (req, res) => {
    // email

})



export default router;
