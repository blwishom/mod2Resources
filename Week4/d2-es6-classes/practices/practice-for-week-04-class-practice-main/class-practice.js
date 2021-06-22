/*
Part 1:
Create a class Person that has the following:
1. instance variables that include firstName, lastName and age
2. Create an instance method called introduce which will introduce the person by
   using console.log with a string saying, "Hi, I'm first last, and I'm age
   years old.".
3. Create a static method called introducePeople that will introduce an array of
   Person instances Have the method console.log an error message if the argument
   is not type array Have the method console.log an error message if the any of
   the items in the array are not instances of the Person class

*/
class Person {
  // Your code here
}

/******************************************************************* */
/*
Part 2: 
Create the following child classes: 

Create a new Student class and have
its constructor call the super(), passing the parameters needed for a Person
and a constructor function that takes in parameters for their major subject and
GPA. 
Create a static method called compareGPA which will take in two students
and compare return a string comparing the GPAs return "first last has the
higher GPA" If they're equal, return "Both students have the same GPA"
*/
class Student extends Person {
  // Your code here
}
/*
Create a new Teacher class and have its constructor call the super(), passing
parameters needed for a Person and a constructor function that takes in parameters 
for the subject they teach and their yearsOfExperience.
Create a static method called combinedYearsOfExperience that returns the sum of 
the years of experience of all teachers.
*/
class Teacher extends Person {
  // Your code here
}

/******************************************************************* */
/*
Part 3: Add instance methods to Student and Teacher called introduce console.log the following:
Student: 'Hello. I am firstName lastName, and I study major.'
Teacher: 'Hello. I am firstName lastName, and I have been teaching subject for yearsOfExperience years.
*/
/******************************************************************* */

module.exports = {
  Person,
  Student,
  Teacher,
};