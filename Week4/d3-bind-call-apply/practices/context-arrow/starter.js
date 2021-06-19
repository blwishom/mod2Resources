// ARROW FUNCTIONS AND CONTEXT

class User {
  constructor(name) {
    this.name = name;
    this.changeNameArrow = newName => this.changeName(newName)
  }

  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  // changeName = (newName) => { this works because of where it's defined, not invoked
  //   this.name = newName;
  //   console.log(this)
  //   return this.name;
  // }
}

const michelle = new User("Michelle");

function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}

// greetAfterNameChange(michelle.changeName, 'Elle');
greetAfterNameChange(michelle.changeNameArrow, 'Elle')
