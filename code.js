function flip(array, n) {
    flippedArray = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        if (array.length < n)
            flippedArray[i] = array[array.length - i - 1];
        if (n > 0)
            flippedArray[i] = array[n-1];
        else 
            flippedArray[i] = array[i];
        n--;    
    }
    return flippedArray;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    let max = 0;
    let sorted = 0;
    
    for (let i = 0; i <array.length; i++) { //find the largest element
        if (array[i] > max)
            max = array[i];
    }
    //console.log(max);
    array = flip(array, array.length); //flip the pancake so that the max is the last element in the array
    console.log(array);
    console.log("\n");
    if (array[array.length - 1] != max) //check that max is the last element
       array = flip(array, array.length); //if not then flip once more to get it from the first element to the last element
    console.log(array);
    console.log("\n");
    console.log("\n");
    
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1])
            array = flip(array, i+2);
        console.log(array);    
    }
    console.log("\n");
    return array;
}


let array = [4,5,0,0,0];

console.log(pancakeSort(array));
