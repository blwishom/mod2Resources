const User = require("./user.js");

class Patient extends User {

  constructor(name) {
    super(name);
    this.insurance = null;
  }

  setInsurance(insuranceProvider) {
    this.insurance = insuranceProvider;
  }

  getInsurance() {
    return this.insurance;
  }

}

module.exports = Patient;