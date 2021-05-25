/*

imports her: files, modules, etc

code 


exports

*/
class Apartment {
  constructor(address, bedrooms, baths) {
    this.address = address;
    this.bedrooms = bedrooms;
    this.baths = baths;
  }
}
let appt = new Apartment();
console.log("apartment", appt);
