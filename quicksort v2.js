function quicksort(array) {
  const left = 0;
  const right = array.length - 1;

  if (left < right) {
    const pivotPosition = partition(array, left, right);

    quicksort(array, left, pivotPosition - 1);
    quicksort(array, pivotPosition + 1, right);
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
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

let arr = [34, 123, 12, 44, 64, 35, 21, 87];

quicksort(arr);

console.log(arr);
