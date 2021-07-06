import { Router } from 'express'
import Task from './model.js';
// import { userSchema } from './validation.js';


const router = Router()

//user create
router.post('/', async (req, res,) => {

    const task = new Task(req.body)
    await task.save()

    res.send(task)
})

//get
router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.send(tasks)
})

//put
router.put('/:id', async (req, res) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
    if (!task) return res.status(404).send("User with this Id doesn't exist")

    res.send(task)

})

router.delete('/:id', async (req, res) => {
    const result = await Task.deleteOne({ _id: req.params.id })
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