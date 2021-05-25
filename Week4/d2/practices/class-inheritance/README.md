# Inheritance Practice

Inheritance is a mechanism that passes traits of a parent class to its
descendants, which helps prevents duplication of code. In this exercise, you
will be implementing two classes, `Person` and `Student` which demonstrate
class inheritance in JavaScript.

## Directions

1. Clone the project from the [starter]
2. Implement the `Person` class based on the specifications below
3. Implement the `Student` class based on the specifications below


### Person

- Create a new `Person` class and have it's constructor function take in
  parameters for first name, last name, and age
  - Create an instance method called `introduce` which will introduce the
    person by using `console.log` with a string saying, "Hi, I'm `first`
    `last`, and I'm `age` years old.".
  - Create a static method called `introducePeople` that will introduce an
    array of `Person` instances
    - Have the method console.log an error message if the argument is not type
      array
    - Have the method console.log an error message if the any of the items in
      the array are not instances of the `Person` class

### Student

- Create a new `Student` class and have it's constructor call the `super()`,
  passing the parameters needed for a `Person` and a constructor function that
  takes in parameters for their major subject and GPA.
  - Create a static method called `compareGPA` which will take in two students
    and compare return a string comparing the GPAs
    - `console.log` "`first` `last` has the higher GPA"
    - If they're equal, `console.log` "Both students have the same GPA"


[starter]: https://github.com/appacademy-starters/class-inheritance-starter