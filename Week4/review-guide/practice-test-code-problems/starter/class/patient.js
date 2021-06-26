const User = require('./user')

class Patient extends User{
    constructor(name, birthMonth, birthDate, birthYear) {
        super(name, birthMonth, birthDate, birthYear);
        this.insurance = null;
    }
    
    setInsurance(insProvider) {
        this.insurance = insProvider;
    }
    
    getInsurance() {
        return this.insurance;
    }
}

module.exports = Patient;