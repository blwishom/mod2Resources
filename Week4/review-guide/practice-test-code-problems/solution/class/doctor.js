const User = require("./user.js");

class Doctor extends User {

  constructor(name, birthMonth, birthDate, birthYear) {
    super(name, birthMonth, birthDate, birthYear);
    this.insurance = [];
    this.appointments = [];
  }

  addInsurance(insuranceProvider) {
    if (this.insurance.indexOf(insuranceProvider) < 0) {
      this.insurance.push(insuranceProvider);
    }
  }

  removeInsurance(insuranceProvider) {
    const providerIndex = this.insurance.indexOf(insuranceProvider);
    if (providerIndex >= 0) {
      this.insurance.splice(providerIndex, 1);
    }
  }

  acceptsInsurance(insuranceProvider) {
    return this.insurance.indexOf(insuranceProvider) >= 0;
  }

  addAppointment(appointment) {
    for (let i = 0 ; i < this.appointments.length ; i++) {
      let appt = this.appointments[i];
      if (appt.year === appointment.year &&
          appt.month === appointment.month &&
          appt.date === appointment.date &&
          appt.hour === appointment.hour) {
        return false;
      }
    }
    this.appointments.push(appointment);
    return true;
  }
}

module.exports = Doctor;