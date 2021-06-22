// import express from 'express'

const express = require('express')

const app = express()




const port = 4000

app.listen(port, (err) => {
    if (err) console.log('Something went went wrong', err)
    else console.log(`Server is listening on  http://localhost:${port}`,)
})