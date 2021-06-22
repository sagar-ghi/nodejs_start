const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('payment', () => {
    console.log("Invoice sent!!")
})

eventEmitter.emit('payment')
