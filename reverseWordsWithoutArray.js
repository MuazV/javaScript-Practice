// 1- Reverse Words in a String Without Arrays
// Write a JavaScript function called reverseWordsWithoutArray that takes a sentence as input and returns
// the sentence with its words reversed, without using arrays:
// This JavaScript code challenge involves reversing the words in a given sentence without using arrays. It's a
// practical exercise that combines string manipulation, loops, and functions.
// Expected Outputs :
// For example, if the input is Hello Js World 2023, the function should return "2023 World Js Hello".

// 1.Yöntem (uzun yol)

// let sentence = "Hello Js World 2023"
// let length = sentence.split(" ").length
// let reversedSentence=""
// // console.log(length)

// for(let i = 0; i<length; length--){
//    reversedSentence+= (sentence.split(" ")[length-1])
// }
// console.log(reversedSentence.split(/(?=[A-Z])/).join(" "));

// 2.Yöntem

let sentence = "Hello Js World 2023"
let reverseWord = (sentence.split(" ").reverse().join().replaceAll(",", " "))
console.log(reverseWord);

