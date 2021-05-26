
const { BuildingUnit } = require("./buildingUnit");



class Apartment extends BuildingUnit {
  constructor(address, bedrooms, baths) {
    super(unit);
    this.address = address;
    this.bedrooms = bedrooms;
    this.baths = baths;
  }

  apptDescription() {
    console.log(`This fabulous ${this.bedrooms} bedroom apartment, 
    located at ${this.address} 
    has ${this.baths} luxuriant bathrooms 
    for all your evacuating needs.`);
  }

  static roomCompare(bedroom1, bedroom2) {
    if (bedroom1.bedrooms > bedroom2.bedrooms) {
      return bedroom1;
    } else if (bedroom2.bedrooms > bedroom1.bedrooms) {
      return bedroom2;
    } else {
      return "both appartments have same number of rooms";
    }
  }
}

let appt1 = new Apartment("121 address dr", 3, 4);

let appt2 = new Apartment("123 code dr", 6, 4);

console.log(Apartment.roomCompare(appt1, appt2));
