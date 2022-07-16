// given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

let list = [1,3,-1,-3,5,3,6,7];
let k = 3; 
let new_list = []


for(let i = 0; i <(list.length -k)+1; i++){
    new_list.push(Math.max(...list.slice(i,i+k)))
}
console.log(new_list)