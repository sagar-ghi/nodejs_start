const { readFile, readFileSync } = require('fs')
// console.log(fs)

readFile('./test1.txt', 'utf8', (err, txt) => {
    if (err) {
        console.log('error reading document')
    }
    else {
        console.log(txt)
    }
})