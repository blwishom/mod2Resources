# Polymorphism Practice

Polymorphism is a principle which allows one method to have different
implementations for inherited classes. In this practice, you will be writing
code which demonstrates this principle.

## Directions

1. Clone the project from the [starter].
2. Create an `Computer` class with a constructor that takes in `price` and `yearBuilt` parameters
3. Create a method called `powerOn` that `console.log`'s "The computer has booted up"
4. Create a `PC` class that `extends` the `Computer` class and takes an additional parameter `windowsVersion`
5. Create a method called `powerOn` that `console.log`'s "The PC has booted up Windows `windowsVersion`"
6. Create a `Mac` class that `extends` the `Computer` class and takes an additional parameter `macVersion`
7. Create a method called `powerOn` that `console.log`'s "The Mac has booted up Mac `macVersion`"

[starter]: https://github.com/appacademy-starters/class-polymorphism-starter