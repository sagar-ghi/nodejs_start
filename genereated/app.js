
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
// import { errorHandler } from './middleware/error';
import userRouter from './api/user/router.js'
// import taskRouter from './api/task/router.js'


const app = express()


app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use('/users', userRouter)
// app.use('/tasks', taskRouter)

// error handler
// app.use(errorHandler)

// module.exports = app;
export default app


//mongodb

//scaling
//sql vertical scaling

//no-sql
//amazon prime 
//vertical and horizontal scaling
