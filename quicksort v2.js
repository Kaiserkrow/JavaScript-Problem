//function for printing
function getsNthLargest(array, nthLargest) {
  console.log("Given array: " + "[" + array + "]");
  quicksort(array);
  console.log("Nth largest: " + nthLargest);
  return "Output: " + array[array.length - nthLargest];
}

function quicksort(array) {
  quicksortHelper(array, 0, array.length - 1);
  return array;
}

function quicksortHelper(array, left, right) {
  if (left < right) {
    const pivotFinalPos = partition(array, left, right);
    quicksortHelper(array, left, pivotFinalPos - 1); // quicksort on left side of pivot
    quicksortHelper(array, pivotFinalPos + 1, right); // quicksort on right side of pivot
  }
}

function partition(array, left, right) {
  const pivot = array[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, right);
  return i + 1;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]; //swapping two elements without using a third variable
}

let arr = [34, 123, 12, 44, 64, 35, 21, 87];
console.log(getsNthLargest(arr, 3));
