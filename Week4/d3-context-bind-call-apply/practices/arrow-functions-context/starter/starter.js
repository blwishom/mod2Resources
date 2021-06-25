// ARROW FUNCTIONS AND CONTEXT

class User {
  constructor(name) {
    this.name = name;
    this.changeNameArrow = (newName) => this.changeName(newName);
  }

  changeName (newName) {
    this.name = newName;
    return this.name;
  }
}

const michelle = new User("Michelle");

function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}

greetAfterNameChange(michelle.changeNameArrow, "Elle");
