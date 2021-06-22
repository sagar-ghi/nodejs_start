// function add(num1, num2) {
//     return num1 + num2
// }

// module.exports = add
//const fetch=require('node-fetch')

import fetch from 'node-fetch'
// import { add } from './add.js'
import importedmodule from './add.js'

console.log(importedmodule)

function apiCallTwo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(data => data)
}

// console.log("i;m first")
// const result = await apiCallTwo()
// console.log("Hello I need to call second based on nodejs non-blocking behaivour")

// console.log(result)
