// Event and Event Emitter

const EventEmitter = require('events')
const emitter = new EventEmitter()

// Register an listner
emitter.on('messageLogged',(arg) => {                   //e,eventArg
    console.log('Listner called',arg)
})
// Raise an event
emitter.emit('messageLogged',{id:1, url:'http://'})