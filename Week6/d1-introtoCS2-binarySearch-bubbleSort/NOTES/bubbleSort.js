/*
Bubble Sort is almost NEVER used because it is not efficient!!
- Every movement of an item requires an individual pass through the array.

Bubble Sort works by moving the SMALLEST elements to the beginning of the array.

Bubble Sort manipulates the array by swapping the position of two elements. To
implement Bubble Sort in JS, you'll need to perform this operation. It helps to
have a function to do that. A key detail in this function is that you need an
extra variable to store one of the elements since you will be overwriting them
in the array: 
*/

//swap function:
function swap(array, idx1, idx2) {
  let temp = array[idx1]; // save a copy of the first value
  array[idx1] = array[idx2]; // overwrite the first value with the second value
  array[idx2] = temp; // overwrite the second value with the first value
}
//Note that the swap function does not create or return a new array. It mutates
//the original array:
let arr1 = [2, 8, 5, 2, 6];
swap(arr1, 1, 2);
arr1; // => [ 2, 5, 8, 2, 6 ]
