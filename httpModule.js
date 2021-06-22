const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url = '/api/users') {
        res.write(JSON.stringify({ id: 1, name: "Hari" }))
        res.end()
    }

})


const port = 4000

server.listen(port)

console.log('Listening on port', port)

