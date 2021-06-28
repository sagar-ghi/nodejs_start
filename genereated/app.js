
import express from 'express'
import morgan from 'morgan'
// import { errorHandler } from './middleware/error';
import userRouter from './api/user/router.js'

const app = express()


app.use(morgan('dev'));
app.use(express.json());

app.use('/users', userRouter)
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
