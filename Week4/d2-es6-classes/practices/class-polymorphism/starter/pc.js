const Computer = require('./computer')

class PC extends Computer{
    constructor(price, yearBuilt, windowsVersion) {
        super(price, yearBuilt);
        this.windowsVersion = windowsVersion;
        
    }

    powerOn() {
        console.log(`The computer has booted up Windows ${this.windowsVersion}`)
    }

}

module.exports = PC;