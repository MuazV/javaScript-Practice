// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.


let list = [1,2,3,4,5,6,7,8];







function evenLast(numbers) {
    let start_top = 0;
    let last_top = 0;
    for(let i=0; i < numbers.length; i+=2){
        start_top += numbers[i]
    }

    if(numbers.length > 0){
        last_top = start_top * numbers[numbers.length -1]
        return last_top
        }
        else{
            return 0
        }
}

console.log(sumList([1,2,3,4,5,6,7,8]))
