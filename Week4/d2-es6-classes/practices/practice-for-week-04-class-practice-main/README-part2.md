# JavaScript Class Practice Part 2

# Inheritance Practice

Inheritance is a mechanism that passes traits of a parent class to its
descendants, which helps prevents duplication of code. In this exercise, you
will be implementing two classes which demonstrate class inheritance in
JavaScript.

# Directions

You will continue with the same file you downloaded in part 1 from the
[starter](https://github.com/appacademy/practice-for-week-04-class-practice
"javascript-classes").

## Create the following child classes:

### Student

1. Create a new Student class and have its constructor call the super(), passing
   the parameters needed for a Person and a constructor function that takes in
   parameters for their major subject and GPA.
2. Create a static method called compareGPA which will take in two students and
   compare return a string comparing the GPAs return "firstName lastName has the
   higher GPA" If they're equal, return "Both students have the same GPA"

### Teacher

1. Create a new Teacher class and have its constructor call the super(), passing
   parameters needed for a Person and a constructor function that takes in
   parameters for the subject they teach and their yearsOfExperience.
2. Create a static method called combinedYearsOfExperience that returns the sum
   of the years of experience of all teachers.

Run `mocha test/part2-spec.js` to test that you have created the classes
correctly.