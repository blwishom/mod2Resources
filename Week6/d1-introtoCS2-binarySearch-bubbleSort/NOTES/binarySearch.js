/*
Binary Search: 
-Binary Search utilizes the divide and conquer approach. 
-You've already used this without even knowing...
        ex: Phonebooks, dictionaries, etc.
Binary search method first looks at the midpoint of a
SORTED array, and then checks to see if that element is 
greater than, less than, or equal to the element you are looking for.

IT ONLY WORKS WITH SORTED ARRAYS, so it is often needed to have a
sorting function that can quickly sort your array if it is not presorted
*/

//quick way of sorting arrays in Javascript

let array = [5, 28, 98, 13, 4, 87, 45, 2];
array.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(array);
