/*
Just like Merge Sort, Quick Sort uses a divide and conquer strategy. The key
ideas of Quick Sort are:
1. It is easy to sort elements of an array relative to a particular target
   value.
2. An array of 0 or 1 elements is already sorted


There are some standard steps when implementing a quick sort algorithm:
1. choose an element called "the pivot", how that's done is up to the
   implementation
2. take two variables to point left and right of the list excluding pivot
3. left points to the low index
4. right points to the high
5. while value at left is less than pivot move right
6. while value at right is greater than pivot move left
7. if both step 5 and step 6 does not match swap left and right
8. if left ≥ right, the point where they met is new pivot
9. repeat, recursively calling this for smaller and smaller arrays


*/
