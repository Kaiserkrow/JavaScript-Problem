function quicksort(array) {
  quicksortHelper(array, 0, array.length - 1);

  return array;
}

function quicksortHelper(array, left, right) {
  if (left < right) {
    const pivotPosition = partition(array, left, right);

    quicksortHelper(array, left, pivotPosition - 1);
    quicksortHelper(array, pivotPosition + 1, right);
  }
}

function partition(array, left, right) {
  const pivot = array[right];

  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      i++;

      swap(array, i, j);
    }
  }

  swap(arr, i + 1, right);

  return i + 1;
}

function swap(array, i, j) {
  [[array[i], array[j]]] = [[array[j], array[i]]];
}

let arr = [34, 123, 12, 44, 64, 35, 21, 87];

quicksort(arr);

console.log(arr);
