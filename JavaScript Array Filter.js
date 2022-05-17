// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]
// ******************************************************
// Solution-1
let numbers = [2,4,5,6]
let evennumbers = numbers.filter(even);

function even(v) {
    if(v%2 == 0){ return v}
}

// console.log(evennumbers);

// **************************************************

//Solution-2
// let numbers = [2,4,5,6]
// // function isEven(num){
// //     return (num%2 == 0)
// // }
// let muaz = numbers.filter((num) => num%2 == 0)
// console.log(muaz);

//******************************************** */

// Solution-3
// function getEvenNumbers(numbersArray){
//     let x= numbersArray.filter((y) => y%2 == 0)
//     return x
// }

// console.log(getEvenNumbers([1,2,3,4]));


// let numbers = [2,4,5,6]

// let muaz = numbers.filter((a) => !(a%2));
// console.log(muaz);



// function EvenNumbers(v){
//     return (v%2)
//     }

// console.log(muaz)