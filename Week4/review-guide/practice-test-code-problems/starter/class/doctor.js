const User = require("./user");

class Doctor extends User {
  constructor(name, birthMonth, birthDate, birthYear) {
    super(name, birthMonth, birthDate, birthYear);
    this.insurance = [];
    this.appointments = [];
  }

  acceptsInsurance(insProvider) {
    // return this.insurance.indexOf(insProvider) >= 0;
    for (let i = 0; i < this.insurance.length; i++) {
      let ele = this.insurance[i];
      if (ele === insProvider) {
        return true;
      }
    }
    return false;
  }

  addInsurance(insProvider) {
    if (this.insurance.indexOf(insProvider) < 0) {
      this.insurance.push(insProvider);
    }
  }

  removeInsurance(insProvider) {
    const provIdx = this.insurance.indexOf(insProvider);
    if (provIdx >= 0) {
      this.insurance.splice(provIdx, 1);
    }
  }
  addAppointment(appointment) {
    for (let i = 0; i < this.appointments.length; i++) {
      let appt = this.appointments[i];
      if (
        appt.year === appointment.year &&
        appt.month === appointment.month &&
        appt.date === appointment.date &&
        appt.hour === appointment.hour
      ) {
        return false;
      }
    }
    this.appointments.push(appointment);
    return true;
  }
}

module.exports = Doctor;
