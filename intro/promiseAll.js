const fetch = require('node-fetch')

function apiCallOne() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => data)
}
function apiCallTwo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(data => data)
}


// console.log("I'm starting to get data")
async function getFakeData() {
    console.time('test')
    // const result = await apiCallOne()
    // const result2 = await apiCallTwo()
    const result = await Promise.all([apiCallOne(), apiCallTwo()])
    // const anyResult = await Promise.any([apiCallOne(), apiCallTwo()])
    // console.log(anyResult)
    console.log(result2)
    console.timeEnd('test')
}
getFakeData()
// console.log(apiCallOne())
// console.log(apiCallTwo())
