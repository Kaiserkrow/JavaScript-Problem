let arr = [34, 123, 12, 44, 64, 35, 21, 87];

function nthLargest(array, nthLargest) {
  console.log("Given array: " + array);
  arr.sort((a, b) => a - b);
  console.log("Nth largest: " + nthLargest);
  return array[array.length - nthLargest];
}

console.log(nthLargest(arr, 4));
