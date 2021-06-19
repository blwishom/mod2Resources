class BuildingUnit {
  constructor(unit) {
    this.unit = unit;
  }

  buildingInfo() {
    // console.log(this.unit.toUpperCase());
    return this.unit.toUpperCase();
  }
}

let unit = new BuildingUnit("2323");
console.log(unit.buildingInfo());

module.exports = { BuildingUnit };
