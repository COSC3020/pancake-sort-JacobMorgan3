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
    if (array.length < 2)
        return array;
    let loopCount = 0;
    let done = 0;
    while (done != array.length) {
        //console.log("loop: " + loopCount)
        let max = 0;
        let dist = 0;
        let times = 0;
        for (let i = 0; i < array.length; i++) { //find the largest element, and the distance to
            if (i == array.length - done)
                break;
            if (array[i] > max) {
                max = array[i];
                times++;
            }
            dist++;
        }
        //console.log("max: " + max);
        dist = max - times - 1;
        //console.log("dist: " + dist);
        //console.log("done: " + done);
        if (dist == 0)
            array = flip(array, array.length - done + 1);
        else
            array = flip(array, dist); //flip the pancake so that the max is the first element in the array
        array = flip(array, array.length - done); //flip once more to get it from the first element to the last element     
        done++; //increase count of sorted elements
        //console.log(array);
        //console.log("\n");
        //loopCount++;
    }
    console.log("End Result:")
    return array;
}


//let array = [5,2,1,7,9,6];

//console.log(pancakeSort(array));
