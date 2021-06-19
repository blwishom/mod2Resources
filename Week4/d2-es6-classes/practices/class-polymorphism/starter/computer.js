class Computer {
    constructor(price, yearBuilt) {
        this.price = price;
        this.yearBuilt = yearBuilt;
    }
    powerOn() {
        console.log('The computer has booted up.')
    }
}

module.exports = Computer;