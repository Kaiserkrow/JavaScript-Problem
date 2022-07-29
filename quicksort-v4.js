function quicksort(array){  
    quicksortHelper(array, 0, array.length);

    return array;
}

function quicksortHelper(array, left, right){
    const finalPivotPos = partition(array, left, right);

    quicksortHelper(array, left, finalPivotPos-1);
    quicksortHelper(array, finalPivotPos+1, right);
}

function partition(array, left, right){
    let pivot = array[right];
    let i = left -1; 
    for(let j = left; j < right; j++){
        if(array[j]< pivot){
            i++;
            swap(array, i , j);
        }
    }
    swap(array, i+1, right)

    return i+1; 
}

function swap(array, i , j){
    [array[i], array[j]] = [array[j], array[i]];
}

let arr = [4,6,9, 45, 84,63];

quicksort(arr);