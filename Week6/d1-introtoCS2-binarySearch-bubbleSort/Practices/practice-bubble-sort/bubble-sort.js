function swap(array, idx1, idx2) {
  let temp = array[idx1]; //save a copy of first value
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      // If the current value is greater than its neighbor to the right
      // Swap those values
      if (array[i] > array[i + 1]) {
        // swap(array, i, i + 1);
        [array[i], array[i+1]] = [array[i + 1], array[i]]
        swapped = true;
        console.log(array.join(","));
      }
    }
  }

  // Do not move this console.log
  

  // If you get to the end of the array and no swaps have occurred, return

  // Otherwise, repeat from the beginning
  return array;
}

module.exports = bubbleSort;
