const Computer = require('./computer')
const Mac = require('./mac')
const PC = require('./pc')

let computer = new Computer(500, 2016)
let pc = new PC(800, 2020, 10)
let mac = new Mac(2100, 2003, 'OS X')

computer.powerOn()
pc.powerOn()
mac.powerOn()