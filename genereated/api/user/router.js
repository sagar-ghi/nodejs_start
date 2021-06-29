import { Router } from 'express'
import User from './model.js';
import { userSchema } from './validation.js';


const router = Router()

//user create
router.post('/', async (req, res,) => {
    const { error } = userSchema.validate(req.body, { abortEarly: false })
    if (error) return res.status(400).send(error.details[0].message)

    const user = new User(req.body)
    await user.save()

    res.send(user)
})

//get
router.get('/', async (req, res) => {
    const users = await User.find()
    res.send(users)
})

//put
router.put('/:id', async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
    if (!user) return res.status(404).send("User with this Id doesn't exist")

    res.send(user)

})

router.delete('/:id', async (req, res) => {
    const result = await User.deleteOne({ _id: req.params.id })
    if (!result) return res.status(404).send("User with this Id doesn't exist")
    res.send(result)
})

export default router;

//todo
// schema
// title
// description
// state 

// backlog
// start
// completed