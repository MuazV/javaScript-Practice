// given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

let list = [10, 5, 2, 7, 8, 7];
let k = 2; //4 -- 2 =>5 -- 4 =>3
let counter = 0;
let muaz = k
let new_list = []
// const slicedArray = list.slice(counter, k);
// console.log(slicedArray);

for(let i = 0; i <(list.length -muaz)+1; i++){
    new_list.push(Math.max(...(list.slice(counter,k))))
    counter++
    k++
}
console.log(new_list)