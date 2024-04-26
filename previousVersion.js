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

function pancakeSort(array) {
    if (array.length < 2) //if the array has 0 or 1 elements return it becuase it is sorted
        return array;
    //let sectionNotSorted = array.length;
    let done = 0;
    while (done != array.length) {
        let max = 0;
        let dist = 0
        for (let i = 0; i < array.length; i++) { //find the max element, and the distance to it
            if (i == array.length - done) //if it's a previous max don't consider it
                break;
            if (array[i] > max) {
                max = array[i]; //update max
                dist = i + 1; //update distance to max
            }
        }
        array = flip(array, dist); //flip so the max is the first element
        if (dist > array.length - 1)
            array = flip(array, array.length - done); //flip once more to get max at the end
        
        //sectionNotSorted--;
        done++;
    }   
    return array;
}


let array = [1,2,1,2];

console.log(pancakeSort(array));
