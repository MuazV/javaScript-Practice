// This is an interview question asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

let list = [-1,-2,-4,-6,1, 2, 0];
let newlist = list.sort((a,b) => a-b);
let empty = []

for(let i = 0; i<newlist.length; i++){
    if((newlist[i]+1 != newlist[i+1]) && (newlist[i] > 0))
   empty.push(newlist[i]+1)
}
console.log(empty[0])
