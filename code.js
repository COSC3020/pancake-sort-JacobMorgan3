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
    //let loopCount = 0;
    let tmp = array.length + 1;
    while (tmp > -1) {
        //console.log("loop: " + loopCount)
        let max = 0;
        let dist = 0;
        let times = 0;
    
        for (let i = 0; i <array.length; i++) { //find the largest element, and the distance to
            if (array[i] > max) {
                max = array[i];
                times++;
            }
            dist++;    
        }
        dist = dist - times + 1;
        array = flip(array, dist); //flip the pancake so that the max is the first element in the array
        if (array[array.length - 1] != max) //check that max is the last element
            array = flip(array, array.length); //if not then flip once more to get it from the first element to the last element
        tmp--; // decrease tmp so we exclude the 'sorted' part at the end
        //console.log(array);
        //console.log("\n");
        //loopCount++;
    }
    return array;
}


//let array = [4,5,11,9,0];

//console.log(pancakeSort(array));
