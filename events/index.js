// https://www.youtube.com/watch?v=L18RHG2DwwA&list=PLC3y8-rFHvwj1_l8acs_lBi3a0HNb3bAN  -> Event Loop

const EventEmitter = require('events')

const event = new EventEmitter()

event.on('open', (code) => {
    console.log(`Event called with code ${code}`)
})   
event.emit('open', 12) 