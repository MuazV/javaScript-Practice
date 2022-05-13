// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// Solution-1
let x = "This is an example";
let hatice = ""
let muaz = x.split(" ")

for (let i = 0; i < muaz.length; i++ ) {
    const yigit = muaz[i].split("").reverse().join("");
    hatice = hatice + " " + yigit  
}
console.log(hatice.trim(" "));



// Solution-2
// let muaz = "This is an example!";
// console.log(muaz.split("").reverse().join("").split(" ").reverse().join(" "));




//Solution-3
// let muaz = "This is an example!";
// console.log(muaz.split());
// console.log(muaz.split(""));
// console.log(muaz.split(" "));
// console.log(muaz.split("").reverse());
// console.log(muaz.split("").reverse().join(""));
// console.log(muaz.split("").reverse().join(" "));
// console.log(muaz.split("").reverse().join(","));
// console.log(muaz.split("").reverse().join("").split(" ").reverse().join(" "));



//Solution-4
// let reverseword = "This is an example!";
// let muaz = reverseword.split(" ").map(function (word){
//     return word.split("").reverse().join("")
// });
// console.log(muaz.join(" "));


//Solution-5
// let emre = muaz.split(" ");
// function reversed(word){
//     let empty_list = []
//     word.forEach(element => {
//         empty_list.push(element.split("").reverse().join(""))
//     });
//     return empty_list
// }
// console.log(reversed(emre).join(" "))
