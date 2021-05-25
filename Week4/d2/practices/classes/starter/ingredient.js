// Update a class, Ingredient, with instance properties representing an
// ingredient name, cost, quantity, and unit of measurement.
// Ingredient is located in `ingredient.js`

// Give the class an instance method, printIngredient, that console.logs the
// ingredient's details, including its name, cost, quantity, and unit.*


// Give the class a static method, printIngredientList, that takes an array of
// Ingredient instances and calls printIngredient on every ingredient.

// Give the class an instance method, calculateCost, that takes an integer
// representing a quantity and calculates and returns the cost of the ingredient
// for that quantity.
class Ingredient {
  constructor(name, cost, quantity, meas) {
    this.name = name;
    this.cost = cost;
    this.quantity = quantity;
    this.meas = meas;
  }
  printIngredient() {
    return console.log(this.name, this.cost, this.quantity, this.meas);
  }
  static printIngredientList(...ingredients) {
    return ingredients.map((stuff) => stuff.printIngredient());
  }
  calculateCost(num) {
    return num * this.cost;
  }
}
// class Ingredient {
//   // Insert code here
//   constructor(name, cost, quantity, unit) {
//     this.name = name;
//     this.cost = cost;
//     this.quantity = quantity
//     this.unit = unit;
//   }
//   printIngredient() {
//     console.log(`${this.name} ${this.quantity} ${this.unit} Cost: $${this.cost.toFixed(2)}`)
//     // console.log(this.name, this.quantity, this.unit, 'Cost: ' + this.cost.toFixed(2))
//   }

//   static printIngredientList(ingredients) { //ingredients refers to an array of instances
//     console.log('Ingredients: ')
//     ingredients.forEach(ingredient => {
//       ingredient.printIngredient()
//     })
    
//   }
//   calculateCost(quant) {
//     const cPU = this.cost / this.quantity;
//     return cPU * quant;
//   }

// }

module.exports = Ingredient;
