const { readFile, readFileSync } = require('fs').promises
// console.log(fs)

// readFile('./test1.txt', 'utf8', (err, txt) => {
//     if (err) {
//         console.log('error reading document')
//     }
//     else {
//         console.log(txt)
//     }
// })

//async await

// const result = (async function () {
//     try {
//         const res = await readFile('./test.txt', 'utf8')
//         console.log(res)
//     }
//     catch (ex) {
//         console.log()
//     }
// })()

// const globalTryCatch = (func) => {
//     try {
//         const result = func()

//         return [null, result]
//     } catch (ex) {
//         return [ex, null]

//     }
// }
async function test() {
    try {
        //     const [err, data] = globalTryCatch()
        //    if(err) console.log()

        const res = await readFile('./test1.txt', 'utf8')
        const res2 = await readFile('./test.txt', 'utf8')
        const res2 = await readFile('./test.txt', 'utf8')
        const res2 = await readFile('./test.txt', 'utf8')
        const res2 = await readFile('./test.txt', 'utf8')
        const res2 = await readFile('./test.txt', 'utf8')
        const res2 = await readFile('./test.txt', 'utf8')
        const res2 = await readFile('./test.txt', 'utf8')
        const res2 = await readFile('./test.txt', 'utf8')
        const res2 = await readFile('./test.txt', 'utf8')
        console.log(res)
        return res
    } catch (ex) {
        console.log("Error:", ex)
    }
}
test()

const arr = [1, 2, 3]

// const result = arr.map(async (item) => {
//     await fetch(`https://jsonplaceholder.typicode.com/todos/${item}`)
// })

// async function getFakeData() {
//     for await (let item of arr) {

//     }
// }


// const test = async () => {
//     const res = await readFile('./test.txt', 'utf8')
// }

//14.3
// console.log(result)