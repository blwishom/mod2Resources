const Computer = require('./computer')

class Mac extends Computer{
    constructor(price, yearBuilt, macVersion) {
        super(price, yearBuilt)
        this.macVersion = macVersion;
    }

    powerOn() {
        console.log(`This computer has booted up Mac ${this.macVersion}`)
    }
}

module.exports = Mac;