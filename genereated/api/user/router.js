import { Router } from 'express'
import User from './model.js';


const router = Router()

//user create
router.post('/', async (req, res,) => {
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
    // console.log(req.body)
    const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
    if (!user) return res.status(404).send("User with this Id doesn't exist")

    res.send(user)

})

router.delete('/:id', async (req, res) => {
    console.log(req.params)
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