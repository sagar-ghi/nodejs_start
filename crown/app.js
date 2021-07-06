
import express from 'express'
import asyncErrors from 'express-async-errors'
import morgan from 'morgan'
import cors from 'cors'
import * as path from 'path'
import { errorHandler } from './middleware/error.js';
import userRouter from './api/user/router.js'
import taskRouter from './api/task/router.js'


const app = express()

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(path.resolve(), 'public')))

app.use('/users', userRouter)
app.use('/tasks', taskRouter)


app.get('/', function (req, res) {
    res.sendFile('index.html');
});

// error handler
app.use((err, req, res, _next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //log

    // render the error page
    res.status(500).send("Internal server error");
    // res.render('error');
})

// module.exports = app;
export default app


//mongodb

//scaling
//sql vertical scaling

//no-sql
//amazon prime 
//vertical and horizontal scaling
