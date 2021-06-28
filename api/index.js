// import express from 'express'
require('dotenv').config()
const debug = require('debug')("api")
const bdDebug = require('debug')("db")
const express = require('express')
const Joi = require('joi')
const morgan = require('morgan')
const config = require('config')

const userRouter = require('./route/user')

const app = express()

app.use(express.json()) // req.body
app.use(express.urlencoded({ extended: true })) //name='hari'&password="****"
app.use(express.static('public'))
app.use(morgan('tiny'))


app.use(function (req, res, next) {
    console.log("Hello world")
    next()
})


app.use(function (req, res, next) {
    console.log("Log", req.ip)
    next()
})

app.use('/api/users', userRouter)

//middleware
console.log(config.get('message'))
console.log(app.get('env'))
console.log("Node env:", process.env.NODE_ENV)
const port = config.get('port') || 7000

app.listen(port, (err) => {
    if (err) console.log('Something went went wrong', err)
    else{
        bdDebug("Successfully connected to database....")
        debug(`Server is listening on  http://localhost:${port}`,)}
})