// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

//  (1, 0) ==>  1 (1 + 0 = 1)
//  (1, 2) ==>  3 (1 + 2 = 3)
//  (0, 1) ==>  1 (0 + 1 = 1)
//  (1, 1) ==>  1 (1 since both are same)
// (-1, 0) ==> -1 (-1 + 0 = -1)
// (-1, 2) ==>  2 (-1 + 0 + 1 + 2)

function Ab(a,b){
   let empty = [a,b].sort((a,b) => a-b);
   let sum = 0;
   for(let i = empty[0]; i <= empty[1]; i++){
        sum += i
   }
   return sum
}

console.log(Ab(-1,2));

const getSum = (a,b) => {
    if (a === b){
        return a
    } else if (a > b){
        return b + getSum(a, b+1)
    } else {
        return a + getSum(a+1, b)
    }
}
console.log(getSum(-1,2));