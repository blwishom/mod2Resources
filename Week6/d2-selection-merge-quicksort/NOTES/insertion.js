/*
Insertion Sort works similar to Selection Sort in that it gradually builds up a
larger and larger sorted region at the left-most end of the array. However, they
differ in that insertion sort focuses on sorting each element in the order they
appear from left to right, regardless of their value, and inserting them into
the most appropriate position in the already sorted region.

Steps of Insertion Sort:
1. If it is the first element, it is already sorted. return 1;
2. Pick next element
3. Compare with all elements in the sorted sub-list
4. Shift all the elements in the sorted sub-list that is greater than the value
   to be sorted
5. Insert the value
6. Repeat until list is sorted
*/

//This algorithm does not require the swap function we have used previously.
